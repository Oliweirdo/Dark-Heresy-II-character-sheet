import {
  ADD_TRAIT,
  UPDATE_TRAIT,
  REMOVE_TRAIT,
} from "../constants/actionTypes";
import traitsReducer from "../reducers/traitsReducer";

export const addTrait = (trait) => ({
  type: ADD_TRAIT,
  payload: trait,
});
export const updateTrait = (trait) => ({
  type: UPDATE_TRAIT,
  payload: trait,
});
export const removeTrait = (trait) => ({
  type: REMOVE_TRAIT,
  payload: trait,
});
