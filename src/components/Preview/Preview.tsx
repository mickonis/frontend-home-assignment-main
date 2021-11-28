import FilePreview from 'components/FilePreview/FilePreview';
import FolderPreview from 'components/FolderPreview/FolderPreview';
import { TreeContext } from 'context/TreeState';
import { isFolder } from 'helpers/tree';
import { useContext } from 'react';
import { Node } from 'types/tree';
import style from './Preview.module.scss';

const Preview = () => {
  const { activeNode } = useContext(TreeContext);

  const renderPreview = ({ name, type, children }: Node) =>
    isFolder(type) ? (
      <FolderPreview nodes={children} />
    ) : (
      <FilePreview name={name} type={type} />
    );

  return (
    <main className={style.preview}>
      {activeNode && renderPreview(activeNode)}
    </main>
  );
};

export default Preview;
