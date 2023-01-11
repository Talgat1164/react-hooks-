import React, { useRef, useState } from "react";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  const onChange = (e) => {
    setValue(e.target.value);
    // search(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default App;
