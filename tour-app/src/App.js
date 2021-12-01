import React, { useEffect, useState } from 'react';
import './App.css';
import Error from './Error';
import Loading from './Loading';
import Tours from './Tours';

function App() {
	const [tours, setTours] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const url = 'https://course-api.com/react-tours-project';

	const fetchTours = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(url);
			const data = await response.json();
			setTours(data);
			setIsLoading(false);
		} catch (error) {
			setError(true);
		}
	};

	// Runs once when the app loads
	useEffect(() => {
		fetchTours();
	}, []);

	return (
		<div className="App">
			{error && <Error />}
			{isLoading ? <Loading /> : <Tours tours={tours} />}
		</div>
	);
}

export default App;
