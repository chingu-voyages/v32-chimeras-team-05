import resourceService from "../../services/resources";

const reducer = (state = [], action) => {
  console.log("ACTION:", action);
  switch (action.type) {
    case "NEW_RESOURCE":
      const id = action.data.id;
      return [...state, action.data];
    case "INIT_RESOURCES":
      return action.data;
    case "EDIT_RESOURCE":
      const resourceToChange = state.find((n) => n.id === id);
      const changedResource = action.data;
      return state.map((resource) =>
        resource.id !== id ? resource : changedResource
      );
    case "DELETE_RESOURCE":
      const updatedResource = state.filter(
        (resource) => resource.id !== action.data
      );

      return [...updatedResource];

    default:
      return state;
  }
};

export const initializeResources = () => {
  return async (dispatch) => {
    const resources = await resourceService.getAll();
    dispatch({
      type: "INIT_RESOURCES",
      data: resources,
    });
  };
};

export const createResource = (content, uid) => {
  return async (dispatch) => {
    const newResource = await resourceService.createNew(content);
    dispatch({
      type: "NEW_RESOURCE",
      data: newResource,
    });
  };
};

export const deleteResource = (id) => {
  return async (dispatch) => {
    const deletedResource = await resourceService.deleteResource(id);

    dispatch({
      type: "DELETE_RESOURCE",
      data: id,
    });
  };
};

// const anecdotesAtStart = [
//     "If it hurts, do it more often",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//   ];

//   const getId = () => (100000 * Math.random()).toFixed(0);

//   const asObject = (anecdote) => {
//     return {
//       content: anecdote,
//       id: getId(),
//       votes: 0,
//     };
//   };

//   const sortAnecdotes = (anecdotes) => {
//     return anecdotes.sort((a, b) =>
//       a.votes < b.votes ? 1 : b.votes < a.votes ? -1 : 0
//     );
//   };

//   export const initialState = anecdotesAtStart.map(asObject);
//   console.log(initialState);

//   const reducer = (state = initialState, action) => {
//     console.log("state now: ", state);
//     console.log("action", action);
//     switch (action.type) {
//       case "VOTE":
//         const id = action.data.id;
//         const anecdoteToChange = state.find((n) => n.id === id);

//         const changedAnecdote = {
//           ...anecdoteToChange,
//           votes: anecdoteToChange.votes + 1,
//         };

//         return sortAnecdotes(
//           state.map((anecdote) =>
//             anecdote.id !== id ? anecdote : changedAnecdote
//           )
//         );
//       case "ADD":
//         const newAnecdote = action.data;
//         console.log(newAnecdote);
//         console.log(state);
//         return sortAnecdotes([...state, newAnecdote]);
//       default:
//         return state;
//     }
//   };

//   export const anecdoteIncrementor = (id) => {
//     return {
//       type: "VOTE",
//       data: { id },
//     };
//   };

//   export const anecdoteAdder = (content) => {
//     return {
//       type: "ADD",
//       data: {
//         content: content,
//         id: getId(),
//         votes: 0,
//       },
//     };
//   };

export default reducer;
