const INITIAL_STATE = {
  name: '',
  email: '',
  phone: ''
};

export default function reducer(state = INITIAL_STATE, action) {

  if (action.type === 'changeName') {
    return Object.assign({}, state, {
    name: action.event.target.value
  });
}
if (action.type === 'changeEmail') {
  return Object.assign({}, state, {
    email: action.event.target.value
});
}
if (action.type === 'changePhone') {
  return Object.assign({}, state, {
    phone: action.event.target.value
});
}
  return state;
}
