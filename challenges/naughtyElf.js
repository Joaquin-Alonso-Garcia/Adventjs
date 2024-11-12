const findNaughtyStep = (original, modified) => {
  const originalSteps = original.split('');
  const modifiedSteps = modified.split('');
  const originalCopy = [...originalSteps];
  const modifiedCopy = [...modifiedSteps];

  for (const step of originalCopy) {
    const index = modifiedCopy.indexOf(step);
    // console.log('🚀 ~ index:', index);

    if (index > -1) {
      modifiedCopy.splice(index, 1);
    } else {
      return step;
    }
  }

  console.log('🚀 ~ odifiedCopy[0]:', modifiedCopy[0]);
  return modifiedCopy[0] || null;
}

export default findNaughtyStep;