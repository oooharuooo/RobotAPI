import Robot from "./components/Robot";
import { useGlobalContext } from "./context";

function App() {
	const { studentData } = useGlobalContext();
	console.log(studentData);
	return (
		<div>
			<Robot />
		</div>
	);
}

export default App;
