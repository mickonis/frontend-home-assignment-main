import { useEffect } from "react";

export const App = function App() {
 
  useEffect(() => {
getData()
  },[])

  const getData = async() => {
    const response = await fetch("http://localhost:3001/api/v1/tree");
    const json = await response.json();
    console.log('json',json)
  }

  return <h1>Corti Frontend Home Assignment</h1>;
};
