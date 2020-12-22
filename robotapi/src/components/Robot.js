import React from "react";
import SearchName from "./SearchName";
import AddTag from "./AddTag";
import { useGlobalContext } from ".././context";

import "../index.css";

function Robot() {
	const {
		isExtended,
		plusButton,
		filteredStudent,
	} = useGlobalContext();
	
	return (
		<>
			<SearchName />
			{filteredStudent.map((student) => {
				const {
					company,
					email,
					grades,
					id,
					pic,
					skill,
					firstName,
					lastName,
				} = student;

				/* Calculate Average Grade */
				const averageGrade =
					grades.map((grade) => parseInt(grade)).reduce((a, b) => a + b, 0) /
					grades.length;

				return (
					<article key={id} className="student-container">
						<div className="profile-image">
							<img src={pic} alt={firstName} />
						</div>
						<div className="profile-info">
							<h1>
								{`${firstName}
								${lastName}`}
							</h1>
							<p>Email: {email}</p>
							<p>Company: {company}</p>
							<p>Skill: {skill}</p>
							<p>Average: {averageGrade}% </p>
							<AddTag />
							{isExtended && (
								<div>
									{grades.map((grade, index) => {
										return (
											<p key={index}>
												Test{index + 1}: {grade}%
											</p>
										);
									})}
								</div>
							)}
						</div>
						<button type="button" className="btn-plus" onClick={plusButton}>
							✚
						</button>
					</article>
				);
			})}
		</>
	);
}

export default Robot;
