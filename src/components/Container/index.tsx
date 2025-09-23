import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import type { ContainerTypes } from './types';
import Alert from '../Alert';
import BottomSheet from '../BottomSheet';
import HeadeMenu from '../HeaderMenu';
import { useTheme } from '../ThemeProvider';

const Container: React.FC<ContainerTypes> = (props) => {
	const theme = useTheme();
	return (
  <>
    {props.modal}
    {props.header ? (
      <HeadeMenu
        title={props.header.title}
        onPress={props.header.onPress}
        style={props.header.style}
				titleStyle={props.header.titleStyle}
				color='pink'
      />
    ) : null}

    {props.alert && (
      <Alert
        type={props.alert.type}
        visible={props.alert.visible}
        text={props.alert.text}
      />
    )}

    <View style={[
			{ flex: 1, backgroundColor: theme.backgroundColor}, props.style,
		]}>
      {(props.statusbarStyle || props.statusbarBackground) && (
        <StatusBar
          backgroundColor={props.statusbarBackground }
          barStyle={
            props.statusbarStyle === 'light' ? 'light-content' : 'dark-content'
          }
        />
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        {props.scrollable ? (
          <ScrollView>
            {props.children}
          </ScrollView>
        ) : (
          props.children
        )}
      </KeyboardAvoidingView>
    </View>

    {props.bottomSheet && props.bottomSheet.visible ? (
      <BottomSheet
        visible={props.bottomSheet.visible}
        onClose={props.bottomSheet.onClose}
        text={props.text}
        buttons={props.bottomSheet.buttons}
      />
    ) : null}
  </>
);
};

export default Container;
