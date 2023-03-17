import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercises";
import { exercisesOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
			const youtubeSearchUrl =
				"https://youtube-search-and-download.p.rapidapi.com";
			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/${id}`,
				exercisesOptions
			);
			setExerciseDetail(exerciseDetailData);
		};
		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos />
			<SimilarExercise />
		</Box>
	);
};

export default ExerciseDetail;
