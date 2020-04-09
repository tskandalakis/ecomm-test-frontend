export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    //Ignoring errors for now;
    return undefined;
  }
}

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    //Ignoring errors for now;
  }
}

export const deleteState = () => {
  try {
    localStorage.removeItem('state');

    return;
  } catch (err) {
    //Ignoring errors for now;
    return undefined;
  }
}