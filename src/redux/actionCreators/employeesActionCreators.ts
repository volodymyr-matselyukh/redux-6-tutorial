import { Dispatch } from "redux";
import { EmployeesActionTypes } from "../types/employeesActions";
import { UpdateEmployee } from "../../models/UpdateEmployee";

export const loadEmployees = () => {
	return async (dispatch: Dispatch) => {
		const response = await fetch('https://dummyjson.com/users?limit=7')

		const jsonResult = await response.json();

		dispatch({
			type: EmployeesActionTypes.loadAll,
			payload: jsonResult.users
		});
	}
};

export const updateEmployee = (dispatch: Dispatch, employee: UpdateEmployee) => {
	dispatch({
		type: EmployeesActionTypes.update,
		payload: employee
	});
}