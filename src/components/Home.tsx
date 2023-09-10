import { Component } from "react";
import styled from "styled-components";
import {
	HomeContainerDispatchProps,
	HomeContainerProps,
} from "./HomeContainer";
import EmployeeComponent from "./EmployeeComponent";

type Props = HomeContainerProps & HomeContainerDispatchProps;

type State = {};

const StaffBlock = styled.div`
	display: flex;
	margin: 0 auto;
	width: 800px;
	flex-wrap: wrap;
`;

export default class Home extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	componentDidMount(): void {
		if (!this.props.employees?.length) {
			this.props.actions.load();
		}
	}

	render() {
		return (
			<StaffBlock data-test-id="staff-block">
				{this.props.employees.map((employee) => (
					<EmployeeComponent key={employee.id} employee={employee} />
				))}
			</StaffBlock>
		);
	}
}
