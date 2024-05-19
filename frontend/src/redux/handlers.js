export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.events = payload;
};

export const AddHandleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  console.log(state.users);
  state.users.push(payload);
  console.log(state.users);
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
};
