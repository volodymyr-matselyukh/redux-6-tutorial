import { Employee } from "../models/Employee";
import { EmployeesActionTypes, EmployeesActions } from "./types/employeesActions";
import {produce} from "immer"

const initialState: Employee[] = [];

export const employeesReducer = (state = initialState, action: EmployeesActions) => {
	switch (action.type) {
		case EmployeesActionTypes.loadAll:
			console.log("load all", action.payload);

			return action.payload;

		case EmployeesActionTypes.update:
			console.log("updating");
			
			const nextState = produce(state, draftState => {
				const entityToUpdate = draftState.find(e => e.id == action.payload.id);

				if(entityToUpdate)
				{
					entityToUpdate.firstName = action.payload.firstName;
					entityToUpdate.lastName = action.payload.lastName;
					entityToUpdate.company.title = action.payload.position;
					entityToUpdate.yearsOfExperience = action.payload.yearsOfExperience;
				}
			})

			return nextState;

		default:
			return state;
	}
};  