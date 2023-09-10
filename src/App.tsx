import { Provider } from "react-redux";
import Home from "./components/Home";
import HomeContainer from "./components/HomeContainer";
import { store } from "./redux/rootReducer";
import { styled } from "styled-components";

const MainContainer = styled.div`
	height: 100%;
	width: 100%;
`;

function App() {
	return (
		<MainContainer>
			<HomeContainer />
		</MainContainer>
	);
}

export default App;
