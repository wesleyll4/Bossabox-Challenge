import axios from "axios";
import React, { useEffect, useState } from "react";
import { successToast } from "../Toastify/toast";
import ToolCard from "../ToolCard";

// import { Container } from './styles';

const ToolsList = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tools")
      .then((response) => {
        successToast();
        setTools(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {tools?.map((tool, index) => (
        <ToolCard key={index} tool={tool} />
      ))}
    </div>
  );
};

export default ToolsList;
