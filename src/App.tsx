import { getTree } from 'api/tree';
import Header from 'components/Header/Header';
import Preview from 'components/Preview/Preview';
import Sidebar from 'components/Sidebar/Sidebar';
import { TreeContext } from 'context/TreeState';
import { useContext, useEffect } from 'react';
import styles from './App.module.scss';

export const App = () => {
  const { setNodes } = useContext(TreeContext);

  useEffect(() => {
    prepareApp();
  }, []);

  const prepareApp = async () => {
    const { response } = await (await getTree()).json();
    setNodes(response);
  };

  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Preview />
    </div>
  );
};
