const initialState = [
  {
    id: 0,
    name: "Test Name 1",
    email: "testname01@email.com",
    phone: 1234567890,
  },
  {
    id: 2,
    name: "Test Name 2",
    email: "test2name@email.com",
    phone: 4567891230,
  },
  {
    id: 3,
    name: "Test Name 3",
    email: "testname3@email.com",
    phone: 5678912340,
  },
  {
    id: 4,
    name: "Test Name 4",
    email: "T4estname@email.com",
    phone: 7890123456,
  },
  {
    id: 5,
    name: "Test Name 5",
    email: "Test5.name@email.com",
    phone: 2345678901,
  },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
