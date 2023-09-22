import { connect } from "react-redux";
import ViewEmployee from "./ViewEmployee";
import { StoreState } from "../redux/rootReducer";
import { Employee } from "../models/Employee";
import { updateEmployee } from "../redux/actionCreators/employeesActionCreators";
import { UpdateEmployee } from "../models/UpdateEmployee";
import { Dispatch } from 'redux';

export interface ViewEmployeeContainerProps{
	employee?: Employee
}

const mapStateToProps = (state: StoreState, {id}: {id: string}): ViewEmployeeContainerProps => {
	return {
		employee: state.employees.find(e => e.id == id)
	}
}

export interface ViewEmployeeContainerDispatchProps {
	updateEmployee: (employee: UpdateEmployee) => void
}

const mapDispatchToProps = (dispatch: Dispatch): ViewEmployeeContainerDispatchProps => ({
	updateEmployee: (employee: UpdateEmployee) => updateEmployee(dispatch, employee)
});


export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);