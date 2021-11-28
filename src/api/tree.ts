const baseUrl = 'http://localhost:3001';

export const getTree = () => fetch(`${baseUrl}/api/v1/tree`);
