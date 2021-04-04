import React from "react";
import SearchBar from "../../components/SearchBar";
import ToolsList from "../../components/ToolsList";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </div>
      <SearchBar />
      <ToolsList />
    </Container>
  );
};

export default Home;
