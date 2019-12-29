const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: '31d41359',
			s: 'avengers'
		}
	});

	console.log(response.data);
};

fetchData();
