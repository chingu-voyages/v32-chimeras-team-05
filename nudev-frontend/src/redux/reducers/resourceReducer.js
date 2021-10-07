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

export const createResource = (content) => {
  return async (dispatch) => {
    const newResourceId = await resourceService.createNew(content);

    dispatch({
      type: "NEW_RESOURCE",
      data: { ...content, id: newResourceId },
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

export const editResource = (id, content) => {
  return async (dispatch) => {
    const editedResource = await resourceService.editResource(id, content);

    dispatch({
      type: "EDIT_RESOURCE",
      data: editedResource,
    });
  };
};

export default reducer;
