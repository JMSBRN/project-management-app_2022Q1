import { IFormBoard, initialState } from "../utils";
import { Action, Reducer } from "redux";

export const boardFormReducer: Reducer<IFormBoard, Action> = (
    state: IFormBoard = initialState.board,
    action: Action
  ) => {
    switch (action.type) {
      
      default:
        return state;
    }
  };