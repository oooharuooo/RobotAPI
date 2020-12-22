import React from "react";
import { useGlobalContext } from ".././context";

function AddTag() {
	const {
		newTag,
		setNewTag,
		tagList,
		submitHandler,
	} = useGlobalContext();

	return (
		<div>
			<div>
				{tagList.map((list, i) => {
					return <p key={i}>{list}</p>;
				})}
			</div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Add a tag"
					value={newTag}
					onChange={(e) => setNewTag(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default AddTag;
