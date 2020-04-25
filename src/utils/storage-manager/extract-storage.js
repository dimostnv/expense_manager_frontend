function extractStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    return !serializedState ? undefined : JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

export default extractStorage;