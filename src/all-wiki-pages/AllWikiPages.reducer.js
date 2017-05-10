const INITIAL_STATE = {
  allPages: []
};

export default function reducer(state = INITIAL_STATE, action) {
  // let allNewPages = state.allPages.slice()
  // allNewPages.push(action.data)
  // console.log('hello', allNewPages);
  if (action.type === 'content'){
    return Object.assign({}, state, {
      allPages: action.data
    })
  }
  return state;
}
