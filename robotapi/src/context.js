import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const url = `https://api.hatchways.io/assessment/students`;

export const AppProvider = ({ children }) => {
	const [studentData, setStudentData] = useState([]);

	// Fetch Data
	const fetchData = async () => {
		const {
			data: { students },
		} = await axios.get(url);
		setStudentData(students);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider value={{ studentData }}>
			{children}
		</AppContext.Provider>
	);
};

// Custom hook
export const useGlobalContext = () => {
	return useContext(AppContext);
};
