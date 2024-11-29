import { TreeNode } from '../interfaces/treeNode';

let symbolsTable: Map<string, string> = new Map();

export const semanticAnalyzer = (node?: TreeNode) => {
  if (!node) {
    return;
  }

  console.log(node.name);

  switch (node.name) {
    case 'localDefinitions':
      semanticAnalyzer(node.children ? node.children[0] : undefined);
      break;
    case 'localDefinition':
      semanticAnalyzer(node.children ? node.children[0] : undefined);
      break;
    case 'variableDef': {
      let type = node.children ? node.children[3].name : 'void';
      let identifier = node.children ? node.children[2].name : 'unknown';

      if (symbolsTable.has(identifier)) {
        throw new Error(`La variable ${identifier} ya ha sido declarada`);
      }

      symbolsTable.set(identifier, type);

      semanticAnalyzer(node.children ? node.children[0] : undefined);
      break;
    }
    default:
      console.log('Not defined');
      break;
  }

  symbolsTable.clear();
};
