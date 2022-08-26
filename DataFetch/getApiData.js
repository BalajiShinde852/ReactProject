useEffect(() => {
  const [fixturesData, setFixturesData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      `http://35.154.67.150:5000/api/fixture/all_matches?page=${page}&rowsPerPage=5`,
      {
        headers: {
          email: "matchdayai@test.com",
        },
      }
    );
    5;
    setFixturesData(response.data.fixtures);
  };
  getData();
  console.log("current page:", page);
}, [page]);
