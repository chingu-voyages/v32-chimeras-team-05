import resourceReducer from "./resourceReducer";
import deepFreeze from "deep-freeze";

describe("resourceReducer", () => {
  test("returns new state with action NEW_RESOURCE", () => {
    const state = [];
    const action = {
      type: "NEW_RESOURCE",
      data: {
        id: "70fb34b5-72e8-4241-bfee-cf241beda461",
        name: "Sharable test",
        description: "Exclusive protocol",
        link: "http://squidoo.com/fusce/consequat/nulla/nisl/nunc.html?amet=sapien&eleifend=varius&t&libero=blandit&quis=non&orci=interdum&nullam=in&molestie=ante&nibh=vestibulum&in=ante&lectus=ipsum&pellentesque=primis&at=in&nulla=faucibus",
        Rating: 4,
        tags: ["news", "moocs"],
        userId: "1e217bee-68e2-4c8d-8791-d7eca35e92e00",
      },
    };

    deepFreeze(state);
    const newState = resourceReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState).toContainEqual(action.data);
  });
  test("return new state with edited resource with EDIT_RESOURCE", () => {
    const state = [
      {
        id: "60fb34b5-72e8-4241-bfee-cf241beda461",
        name: "Sharable",
        description: "Exclusive real-time protocol",
        link: "http://squidoo.com/fusce",
        Rating: 2,
        tags: ["news", "moocs"],
        userId: "1e217bee-68e2-4c8d-8791-d7eca35e92e0",
      },
      {
        id: "45520143-fe92-475b-8a01-6f359b2ae089",
        name: "Profound",
        description: "Quality-focused explicit superstructure",
        link: "https://nasa.gov/vel",
        Rating: 5,
        tags: ["podcasts", "meetups"],
        userId: "76c32d69-f04b-4e46-95ab-601592bdec33",
      },
    ];

    const action = {
      type: "EDIT_RESOURCE",
      data: {
        id: "60fb34b5-72e8-4241-bfee-cf241beda461",
        name: "Sharable has been edited",
        description: "Exclusive real-time protocol edited",
        link: "http://squidoo.com/fusce",
        Rating: 2,
        tags: ["news", "moocs"],
        userId: "1e217bee-68e2-4c8d-8791-d7eca35e92e0",
      },
    };

    deepFreeze(state);
    const newState = resourceReducer(state, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[1]);
    expect(newState).toContainEqual({
      id: "60fb34b5-72e8-4241-bfee-cf241beda461",
      name: "Sharable has been edited",
      description: "Exclusive real-time protocol edited",
      link: "http://squidoo.com/fusce",
      Rating: 2,
      tags: ["news", "moocs"],
      userId: "1e217bee-68e2-4c8d-8791-d7eca35e92e0",
    });
  });
});
