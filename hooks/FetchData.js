import React, { useEffect, useState } from "react";

const FetchData = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    // setState({ data: null, loading: true }); // whenever this hook is run
    setState(state => ({ data: state.data, loading: true }))
    fetch(url)
      .then(x => x.text())
      .then(y => 
            setState({ data: y, loading: false }));
  }, [url]);

  return state;
};  

export default FetchData;
