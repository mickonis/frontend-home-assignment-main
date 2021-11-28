import { TreeContext } from 'context/TreeState';
import { isFolder } from 'helpers/tree';
import { useContext } from 'react';
import { Node } from 'types/tree';
import styles from './FolderPreview.module.scss';

interface FolderPreviewProps {
  nodes?: Node[];
}

const FolderPreview = ({ nodes = [] }: FolderPreviewProps) => {
  const { setActiveNode, setExpandedNodeIds } = useContext(TreeContext);

  const renderNodePreview = (node: Node) => {
    const { type, name } = node;
    return (
      <li
        key={node.id}
        className={styles.item}
        onClick={() => setActiveNode(node)}
      >
        {isFolder(type) && (
          <div
            onClick={() => setExpandedNodeIds(node.id)}
            className={styles.folder}
            data-testid="folder-icon"
          />
        )}
        {!isFolder(type) && (
          <div className={styles.file} data-testid="file-icon">
            {name.charAt(0)}
          </div>
        )}
        <div className={styles.name}>{name}</div>
      </li>
    );
  };

  return (
    <ul className={styles.list} data-testid="folder-preview">
      {nodes.map((node) => renderNodePreview(node))}
    </ul>
  );
};

export default FolderPreview;
