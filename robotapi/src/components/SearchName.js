import React from "react";
import { useGlobalContext } from ".././context";

function SearchName() {
	const { nameInput, setNameInput, tagInput, setTagInput } = useGlobalContext();

	return (
		<div className="searchName">
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					placeholder="Search by name"
					name="name"
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>
				<hr />
				<input
					type="text"
					placeholder="Search by tag"
					name="tag"
					value={tagInput}
					onChange={(e) => setTagInput(e.target.value)}
				/>
				<hr />
			</form>
		</div>
	);
}

export default SearchName;
