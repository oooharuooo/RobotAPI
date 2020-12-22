import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const url = `https://api.hatchways.io/assessment/students`;

export const AppProvider = ({ children }) => {
	const [studentData, setStudentData] = useState([]);
	const [filteredStudent, setFilteredStudent] = useState([]);
	const [nameInput, setNameInput] = useState("");
	const [isExtended, setIsExtended] = useState(false);
	const [newTag, setNewTag] = useState("");
	const [tagList, setTagList] = useState([]);
	const [filteredTagList, setFilteredTagList] = useState([]);
	const [tagInput, setTagInput] = useState("");

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

	// Filter by name
	useEffect(() => {
		setFilteredStudent(
			studentData.filter(({ firstName, lastName }) => {
				return (
					firstName.toLowerCase().includes(nameInput.toLowerCase()) ||
					lastName.toLowerCase().includes(nameInput.toLowerCase())
				);
			})
		);
			
	}, [nameInput, tagInput, studentData]);
	
	// Plus button
	const plusButton = () => {
		setIsExtended(!isExtended);
	};
	// SubmitHandler
	const submitHandler = (e) => {
		e.preventDefault();
		setTagList([...tagList, newTag]);
		setNewTag("");
	};
// const newW = tagList.filter((list) => {
// 	// return list.toLowerCase().includes(tagInput.toLowerCase());
// 	return tagInput.toLowerCase().includes(list.toLowerCase());
// });
// 	console.log(newW)
	return (
		<AppContext.Provider
			value={{
				studentData,
				nameInput,
				setNameInput,
				isExtended,
				plusButton,
				newTag,
				setNewTag,
				filteredStudent,
				tagList,
				setTagList,
				submitHandler,
				tagInput,
				setTagInput,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// Custom hook
export const useGlobalContext = () => {
	return useContext(AppContext);
};
