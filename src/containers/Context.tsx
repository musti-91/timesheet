import React, { createContext, useReducer } from "react";

interface iState {
  loading: boolean;
  isAddMode: boolean;
  newDate: any;
  isEditMode: boolean;
  editDate: any;
}
export interface iStore {
  state: iState;
  dispatch: (param: Action) => void;
}
interface Action {
  type: string;
  payload?: any;
}
const StateContext = createContext({});

export const reducer = (state: iState, { type, payload }: Action): iState => {
  switch (type) {
    case "ADD_MODE":
      return {
        ...state,
        isAddMode: true
      };
    case "ADD_SUCCESS":
      return {
        ...state,
        isAddMode: false,
        newDate: payload
      };
    case "EDIT_MODE":
      return {
        ...state,
        isEditMode: true,
        editDate: payload
      };
    case "EDIT_MODE_SUCCESS":
      return {
        ...state,
        isEditMode: false,
        newDate: payload
      };
  }
  return state;
};
const initialState: iState = {
  loading: false,
  newDate: null,
  editDate: null,
  isAddMode: false,
  isEditMode: false
} as any;

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <StateContext.Provider value={{ dispatch, state }}>
        {children}
      </StateContext.Provider>
    </>
  );
};

export const withContext = (Component: any) => (props: any) => (
  <StateContext.Consumer>
    {store => <Component store={store} {...props} />}
  </StateContext.Consumer>
);
export default Provider;
