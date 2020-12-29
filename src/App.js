import './App.css';
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import RatingFilter from "./components/RatingFilter";
import { MovieProvider } from "./context/MovieContext";
import React from "react";

function App() {

	return (
		<MovieProvider>
			<SearchBar />
			<RatingFilter />
			<MovieList />
		</MovieProvider>
	);
}

export default App;
