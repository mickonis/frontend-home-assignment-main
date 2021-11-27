interface FileNodeProps {
  name: string;
}

const FileNode = ({ name }: FileNodeProps) => (
  <div className="file-node">{name}</div>
);

export default FileNode;
