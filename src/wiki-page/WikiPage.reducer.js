const INITIAL_STATE = {
  content: []
};

export default function reducer(state = INITIAL_STATE, action) {


  if (action.type === 'content'){
    console.log(action.data);
    return Object.assign({}, state, {
      content: action.data
    });
  }
  return state;
}
