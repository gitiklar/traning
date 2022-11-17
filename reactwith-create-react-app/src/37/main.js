import produce from "immer";
// MUTABLE Function
function setLastMessageText_(state, newText) {
  const newState = {
    user: state.user,
    messages: [
      state.messages[0],
      state.messages[1],
      {
        from: state.messages[2].from,
        text: newText,
      },
    ],
  };

  return newState;
}

const setLastMessageText = produce((state, newText) => {
  state.messages[2].text = newText;
});

const state = {
  user: "ynon",
  messages: [
    { from: "George", text: "Hello!" },
    { from: "Martin", text: "nice to see you george" },
    { from: "ynon", text: "see you all later" },
  ],
};

const newState = setLastMessageText(state, "good morning");
console.log(newState);

// These asserts are going to fail
console.assert(state !== newState);
console.assert(state.user === newState.user);
console.assert(state.messages !== newState.messages);
console.assert(state.messages[0] === newState.messages[0]);
console.assert(state.messages[1] === newState.messages[1]);
console.assert(state.messages[2] !== newState.messages[2]);
console.assert(state.messages[2].from == newState.messages[2].from);
console.assert(state.messages[2].text != newState.messages[2].text);
