import React, { useState } from "react";
import useFetch from "../hooks/FetchData";

// could send down props instead
function Prices({ bpi }) {
  console.log(bpi);
  const [currency, setCurrency] = useState("USD");
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  console.log(currency);
  return (
    <div>
      <div>
        {loading ? "this is loading" : data}
        <button onClick={() => setCount(count + 1)}>count is: {count}</button>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          The current rate is {bpi.USD.description}:
          <span className="badge badge-primary"> {bpi[currency].code}</span>
          <span> {bpi[currency].rate}</span>
        </li>
      </ul>
      <div>
        Pick your currency:
        <select onChange={e => setCurrency(e.target.value)}>
          <option value="USD"> USD</option>
          <option value="GBP"> GBP</option>
          <option value="EUR"> EUR</option>
        </select>
      </div>
    </div>
  );
}

export default Prices;
