function isPresentInState(data, state) {
    return state.some((card) => card._id === data._id);
  }

  export {isPresentInState};