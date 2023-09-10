import { combineReducers, createStore, applyMiddleware } from "redux";
  import { employeesReducer } from './employeesReducer';
import { Employee } from "../models/Employee";
import ThunkMiddleware from "redux-thunk";
import addExperience from "./middleware/addExperienceMiddleware";
  
export interface StoreState {
  employees: Employee[];
}

export const reducers = combineReducers<StoreState>({ employees: employeesReducer  });

export const store = createStore(reducers, applyMiddleware(ThunkMiddleware, addExperience));

