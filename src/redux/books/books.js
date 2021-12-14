// actions

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// action creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
