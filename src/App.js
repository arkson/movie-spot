import './App.css';
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import { MovieProvider } from "./MovieContext";

function App() {

	return (
		<MovieProvider>
			<SearchBar />
			<MovieList />
		</MovieProvider>
	);
}

export default App;
