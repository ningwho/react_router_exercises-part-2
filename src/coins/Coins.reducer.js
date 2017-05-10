const INITIAL_STATE = {
  coins: [
    { name: 'quarter', value: 25 },
    { name: 'dime', value: 10 },
    { name: 'nickle', value: 5 },
    { name: 'penny', value: 1 }
  ],
  value: 41


};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'add-penny') {
    //make copy of array
    let newCoins = state.coins.slice()
    //modify new copy
    newCoins.push({ name: 'penny', value: 1 })
    //point to new state
    
    return Object.assign({}, state, {
      coins: newCoins,
      value: state.value + 1

    });
  }
  if (action.type === 'add-nickel') {
    let newCoins = state.coins.slice()
    newCoins.push({ name: 'nickle', value: 5 })
    return Object.assign({}, state, {
      coins: newCoins,
      value: state.value + 5
    });
  }
  if (action.type === 'add-dime') {
    let newCoins = state.coins.slice()
    newCoins.push({ name: 'dime', value: 10 })
    return Object.assign({}, state, {
      coins: newCoins,
      value: state.value + 10
    });
  }
  if (action.type === 'add-quarter') {
    let newCoins = state.coins.slice()
    newCoins.push({ name: 'quarter', value: 25 })
    return Object.assign({}, state, {
      coins: newCoins,
      value: state.value + 25
    });
  }


  return state;
}
