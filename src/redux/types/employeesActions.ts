import { Employee } from "../../models/Employee"
import { UpdateEmployee } from "../../models/UpdateEmployee"

export enum EmployeesActionTypes {
	loadAll,
	update
}

export type LoadEmployeesAction = {
	type: EmployeesActionTypes.loadAll,
	payload: Employee[]
}

export type UpdateEmployeeAction = {
	type: EmployeesActionTypes.update,
	payload: UpdateEmployee
}

export type EmployeesActions = LoadEmployeesAction | UpdateEmployeeAction;