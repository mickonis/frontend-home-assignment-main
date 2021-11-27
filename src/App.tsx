import { useEffect, useState } from 'react';

export const App = function App() {
  const [tree, setTree] = useState<any>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/tree');
    const json = await response.json();
    setTree(json.response);
  };

  const renderNode = (node: any) => {
    console.log('node', node);

    return (
      <div>
        {node.name}
        {node.type === 'folder' && renderNode(node.children)}
      </div>
    );
  };

  //console.log('tree', tree);

  return <div>{tree?.map((node: any) => renderNode(node))}</div>;
};
