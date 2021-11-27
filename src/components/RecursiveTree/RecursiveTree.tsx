import { Tree } from '../../types/tree';
import FileNode from '../FileNode/FileNode';
import FolderNode from '../FolderNode/FolderNode';

interface TreeProps {
  data: Tree[];
}

const RecursiveTree = ({ data }: TreeProps): any => {
  // loop through the data
  if (data?.length > 0) {
    return data.map((item) => {
      if (item.type !== 'folder') {
        return <FileNode name={item.name} />;
      }

      if (item.type === 'folder' && item.children) {
        return (
          <FolderNode name={item.name}>
            <RecursiveTree data={item.children} />
          </FolderNode>
        );
      }
    });
  } else {
    return <div>EMPTY</div>;
  }
};

export default RecursiveTree;
