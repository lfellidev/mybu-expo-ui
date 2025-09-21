export const shuffle = (array: string[], numberOfObjects: number=0) => {
  const cloneArray = [...array];
  const shuffledSequence =cloneArray.sort(() => Math.random() - 0.5)
  if (numberOfObjects==0) {
    return shuffledSequence;
  } else {
    return shuffledSequence.slice(0, numberOfObjects);
  }
};