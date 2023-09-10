import { AnyAction } from "redux";
import { connect } from "react-redux";
import Home from "./Home";
import { reducers, StoreState } from "../redux/rootReducer";
import { Employee } from "../models/Employee";
import { ThunkDispatch } from "redux-thunk";
import { loadEmployees } from "../redux/actionCreators/employeesActionCreators";

export interface HomeContainerProps{
	employees: Employee[]
}

export interface HomeContainerDispatchProps{
	actions:
	{
		load: () => void;
	}
}

const mapStateToProps = (state: StoreState): HomeContainerProps => {
	return {
		employees: state.employees
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, AnyAction>): HomeContainerDispatchProps => ({
	actions: {
	   load: () => dispatch(loadEmployees())
	}
 })

export default connect(mapStateToProps, mapDispatchToProps)(Home);