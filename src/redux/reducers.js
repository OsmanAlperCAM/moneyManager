export default (state, action) => {
  switch (action.type) {
    case 'ADD': {
      console.log('ADD', action.payload.process);
      return {
        ...state,
        dailyProcess: {...state.dailyProcess, ...action.payload.process},
      };
    }
    case 'EXPENSE': {
      return {
        ...state,
        expense: state.expense - action.payload.amount,
        balance: state.balance - action.payload.amount,
      };
    }
    default:
      return state;
  }
};
