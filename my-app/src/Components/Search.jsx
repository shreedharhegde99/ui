import React, { useEffect, useState } from "react";
import countries from "./CountryList.json";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import styled from "styled-components";

const Container = styled.div`
  border: solid black 1px;
  width: 300px;
  margin: auto;
  border-radius: 25px;
  padding: 10px 20px;
  display: flex;
   flex-direction:column;
  justify-content: space-around;
`;

const InputStyle = { maxWidth: "60%", maxHeight: "30px",outline:"none",border:"none" };

function Search() {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    const result = countries
      .filter((item) => {
        const { name } = item;
        if (query === "") {
          return;
        }
        if (name.toLowerCase().indexOf(query) !== -1) {
          return item;
        }
      })
      .map((item) => item.name);
    setSuggestion(result);
  }, [query]);

  // console.log(suggestion);
  return (
    <>
          search bar
      <Container>
        <div>
          <SearchIcon color="primary" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={InputStyle}
            placeholder="Search"
          />
          {query && <CancelOutlinedIcon onClick={() => setQuery("")} />} <br />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {suggestion &&
            suggestion.map((item, i) => { 
              return i<=4 && <div key={i}>{item}</div>;
            })}
        </div>
      </Container>
    </>
  );
}

export default Search;
