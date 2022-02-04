export default (state, action) => {
  switch (action.type) {
    case 'ADD': {
      console.log('ADD', action.payload.process);
      return {
        ...state,
        dailyProcess: [...state.dailyProcess, action.payload.process],
      };
    }
    default:
      return state;
  }
};
