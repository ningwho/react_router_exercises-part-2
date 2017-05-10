const INITIAL_STATE = {
  on: false
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'toggleLight') {
    return Object.assign({}, state, {
      on: !state.on
    });
  }
  return state;
}
