import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercises] = useState([]);
	const [bodyParts, setBodyParts] = useState([]);

	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
				setExercises={setExercises}
				bodyParts={bodyParts}
				setBodyParts={setBodyParts}
			/>
			<Exercises
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
				setExercises={setExercises}
				bodyParts={bodyParts}
				setBodyParts={setBodyParts}
				exercises={exercises}
			/>
		</Box>
	);
};

export default Home;
