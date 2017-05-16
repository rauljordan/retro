const defaultState = {
  example: 'Hello'
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_EXAMPLE':
      return {
        ...state,
        example: action.example
      };
    default:
      return state;
  }
};

export default homeReducer;
