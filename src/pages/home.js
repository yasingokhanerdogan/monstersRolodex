import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [monsters, setMonsters] = useState("");

  const [filteredData, setFilteredData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMonsters = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data);
        setFilteredData(data);
      })
      .catch((err) => {
        setMonsters("");
        setFilteredData("");
        setErrorMessage(err.message);
        console.error(`Error: ${err.message}`);
      });
  };

  useEffect(() => {
    fetchMonsters();
  }, []);

  useEffect(() => {
    if (searchInput.trim() !== "") {
      const searchResults = monsters.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(searchResults);
    } else {
      setFilteredData(monsters);
    }
  }, [searchInput]);

  return (
    <>
      <Helmet>
        <title>Monster Rolodex</title>
        <meta name="description" content="Monster Rolodex Description" />
      </Helmet>

      <div className="wrapper">
        <div className="container">
          <header className="header">
            <h1 className="headerTitle">Monsters Rolodex</h1>
            <input
              type="text"
              placeholder="Search Monster..."
              value={searchInput}
              onChange={({ target }) => setSearchInput(target.value)}
            />
          </header>
          <div className="body">
            {errorMessage !== "" ? (
              <h3 className="error">{errorMessage}</h3>
            ) : monsters[0] && monsters ? (
              filteredData[0] && filteredData ? (
                filteredData.map((item, index) => (
                  <article className="card" key={index}>
                    <img
                      src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
                      alt="monster"
                    />
                    <h2>{item.name}</h2>
                    <h3>{item.email}</h3>
                  </article>
                ))
              ) : (
                <h3 className="noData">No Data...</h3>
              )
            ) : (
              <h3 className="loading">Loading...</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
