import RecursiveTree from 'components/RecursiveTree/RecursiveTree';
import { TreeContext } from 'context/TreeState';
import { useContext } from 'react';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const { nodes } = useContext(TreeContext);
  return (
    <aside className={style.sidebar}>
      {nodes && <RecursiveTree nodes={nodes} />}
    </aside>
  );
};

export default Sidebar;
