import './App.css';
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import RatingFilter from "./components/RatingFilter";
import { MovieProvider } from "./context/MovieContext";
import React, { useState } from "react";

function App() {
	const [query, setQuery] = useState('');
	const [empty, setIsEmpty] = useState(false);
	return (
		<MovieProvider>
			<SearchBar query={query} setQuery={setQuery} setIsEmpty={setIsEmpty} />
			<RatingFilter empty={empty} setIsEmpty={setIsEmpty} />
			<MovieList query={query} empty={empty} setIsEmpty={setIsEmpty} />
		</MovieProvider>
	);
}

export default App;
