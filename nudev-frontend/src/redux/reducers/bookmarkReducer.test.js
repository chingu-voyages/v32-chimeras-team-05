import bookmarkReducer from "./bookmarkReducer";
import deepFreeze from "deep-freeze";

describe("bookmarkReducer", () => {
  test("returns new bookmark with action ADD_BOOKMARK", () => {
    const state = [];
    const action = {
      type: "ADD_BOOKMARK",
      data: {
        userId: "1e217bee-68e2-4c8d-8791-d7eca35e92e00",
        resourceId: ["70fb34b5-72e8-4241-bfee-cf241beda461"],
      },
    };

    deepFreeze(state);
    const newState = bookmarkReducer(state, action);
    console.log(newState);

    expect(newState).toHaveLength(1);
    expect(newState).toContainEqual(action.data);
  });
});
