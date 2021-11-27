import { TreeContext } from 'context/TreeState';
import { useContext } from 'react';
import style from './Preview.module.scss';

const Preview = () => {
  const { activeNode } = useContext(TreeContext);
  return <main className={style.preview}>{activeNode && activeNode.name}</main>;
};

export default Preview;
