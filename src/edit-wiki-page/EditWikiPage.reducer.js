const INITIAL_STATE = {
  content: '',
  title: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'changeState'){
    console.log(action.data);
    return Object.assign({}, state, {
      [action.field]: action.content
    });
  }else if (action.type === 'success'){
    console.log('sucess');
  }else if (action.type === 'error'){
    console.log('error');
  }
  return state;
}
