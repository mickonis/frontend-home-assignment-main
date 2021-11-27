import { useEffect, useState } from 'react';
import RecursiveTree from './components/RecursiveTree/RecursiveTree';

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

  //console.log('tree', tree);

  return (
    <div>
      <RecursiveTree data={tree} />
    </div>
  );
};
