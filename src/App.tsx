import RecursiveTree from 'components/RecursiveTree/RecursiveTree';
import { useEffect, useState } from 'react';
import { Tree } from 'types/tree';

export const App = () => {
  const [tree, setTree] = useState<Tree[] | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/tree');
    const json = await response.json();
    setTree(json.response);
  };

  return <div>{tree && <RecursiveTree data={tree} />}</div>;
};
