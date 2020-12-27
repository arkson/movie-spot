import './App.css';
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import { MovieProvider } from "./MovieContext";
import React, { useState } from "react";

function App() {
	const [query, setQuery] = useState('');
	const [empty, setIsEmpty] = useState(false);
	return (
		<MovieProvider>
			<SearchBar query={query} setQuery={setQuery} setIsEmpty={setIsEmpty} />
			<MovieList query={query} empty={empty} setIsEmpty={setIsEmpty} />
		</MovieProvider>
	);
}

export default App;
