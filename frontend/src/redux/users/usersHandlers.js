export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.users = payload;
};

export const AddHandleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  console.log(payload);
  state.list.push(payload);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
};
