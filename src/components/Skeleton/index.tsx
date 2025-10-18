import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  style?: any;
  loading?: boolean;
  children?: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = 20, style, loading = false, children }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading) {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, { toValue: 1, duration: 800, useNativeDriver: false }),
          Animated.timing(animatedValue, { toValue: 0, duration: 800, useNativeDriver: false }),
        ])
      );
      animation.start();
      return () => animation.stop();
    }
    return () => {}; 
  }, [animatedValue, loading]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ddd', '#f0f0f0'],
  });

  if (loading) {
    return (
      <Animated.View style={[styles.skeleton, { width, height, backgroundColor }, style]} />
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  skeleton: {
    borderRadius: 4,
  },
});

export default Skeleton;