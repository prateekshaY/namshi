import { useState } from "react";


import News from "./news";

import Dropdown from "./dropDown";

export default function App() {
  const [country, setCountry] = useState("us");
  const handleSelect = (con) => {
    setCountry(con);
  };
  return (
    <div className="App">
      <Dropdown onSelect={handleSelect} />
      <News country={country} />
    </div>
  );
};