import FilePreview from 'components/FilePreview/FilePreview';
import FolderPreview from 'components/FolderPreview/FolderPreview';
import { TreeContext } from 'context/TreeState';
import { useContext } from 'react';
import style from './Preview.module.scss';

const Preview = () => {
  const { activeNode } = useContext(TreeContext);

  return (
    <main className={style.preview}>
      {activeNode && activeNode.type !== 'folder' && (
        <FilePreview name={activeNode.name} type={activeNode.type} />
      )}
      {activeNode && activeNode.type === 'folder' && (
        <FolderPreview nodes={activeNode.children ?? []} />
      )}
    </main>
  );
};

export default Preview;
