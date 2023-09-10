import {Middleware} from 'redux'
import {EmployeesActionTypes} from '../types/employeesActions';
import {Employee} from '../../models/Employee';

const getRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const addExperience: Middleware = store => next => action => {
	
	if(action.type == EmployeesActionTypes.loadAll)
	{
		let employees = action.payload;
		employees = employees.map((e: Employee) => { return {
			...e,
			yearsOfExperience: getRandomNumber(2,15)
		}})

		action.payload = employees;
	}

	return next(action);
}

export default addExperience;