import Header from 'components/Header/Header';
import Preview from 'components/Preview/Preview';
import Sidebar from 'components/Sidebar/Sidebar';
import { TreeContext } from 'context/TreeState';
import { useContext, useEffect } from 'react';
import styles from './App.module.scss';

export const App = () => {
  const { setNodes, setActiveNode } = useContext(TreeContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/tree');
    const json = await response.json();
    setNodes(json.response);
    setActiveNode(json.response[0]);
  };

  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Preview />
    </div>
  );
};
