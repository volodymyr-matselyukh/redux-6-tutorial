import { Component } from "react";
import { connect } from "react-redux";
import ViewEmployee from "./ViewEmployee";
import { StoreState } from "../redux/rootReducer";
import { Employee } from "../models/Employee";

export interface ViewEmployeeContainerProps{
	employee?: Employee
}

const mapStateToProps = (state: StoreState, {id}: {id: string}): ViewEmployeeContainerProps => {
	return {
		employee: state.employees.find(e => e.id == id)
	}
}

export default connect(mapStateToProps)(ViewEmployee);