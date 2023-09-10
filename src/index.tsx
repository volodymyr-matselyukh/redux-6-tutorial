import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewEmployee from "./components/ViewEmployee";
import { Provider } from "react-redux";
import { store } from "./redux/rootReducer";
import React from "react";
import ViewEmployeeContainer from "./components/ViewEmployeeContainer";

// const router = createBrowserRouter([
// 	{
// 		path: "/view/:id",
// 		element: (match) => <ViewEmployee id={3} />,
// 	},
// 	{
// 		path: "/",
// 		element: <App />,
// 	},
// ]);

const root = ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/view/:id"
						render={(props) => (<ViewEmployeeContainer id={props.match.params.id ? props.match.params.id : ''} />)}
					>

					</Route>
					<Route path="/">
						<App />
					</Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root") as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
