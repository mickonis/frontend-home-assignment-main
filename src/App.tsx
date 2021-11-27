import { useEffect, useState } from 'react';

export const App = function App() {
  const [tree, setTree] = useState<any>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/tree');
    const json = await response.json();
    setTree(json.response);
  };

  console.log('tree', tree);

  return <h1>Corti Frontend Home Assignment</h1>;
};
