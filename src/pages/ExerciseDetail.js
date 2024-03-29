import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import {
	exercisesOptions,
	fetchData,
	youtobeOptions,
} from "../utils/fetchData";

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exercisesOptions
			);
			setExerciseDetail(exerciseDetailData);

			const youtubeSearchUrl =
				"https://youtube-search-and-download.p.rapidapi.com";
			const exerciseVideosData = await fetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
				youtobeOptions
			);
			setExerciseVideos(exerciseVideosData.contents);
		};

		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
		</Box>
	);
};

export default ExerciseDetail;
