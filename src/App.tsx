import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { TreeContext } from 'context/TreeState';
import { useContext, useEffect } from 'react';

export const App = () => {
  const { setNodes } = useContext(TreeContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/tree');
    const json = await response.json();
    setNodes(json.response);
  };

  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
};
