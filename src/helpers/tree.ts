import { Node, NodeType } from 'types/tree';

export const isFolder = (type: NodeType) => type === 'folder';

export const sortNodes = (a: Node, b: Node) => a.name.localeCompare(b.name);
