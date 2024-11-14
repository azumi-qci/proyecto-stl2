import { faGears, faTree } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import { History } from './compiler/interfaces/history';
import { Token } from './compiler/interfaces/token';
import { TreeNode } from './compiler/interfaces/treeNode';

import { lexicAnalyzer } from './compiler/lexic/lexicAnalyzer';
import { parserAnalyzer } from './compiler/parser/parserAnalyzer';

import Button from './components/Button';
import LexicAnalyzer from './components/LexicAnalyzer';
import Parser from './components/Parser';
import TextEditor from './components/TextEditor';
import TreeView from './components/TreeView';

const Layout: FC = () => {
  const [input, setInput] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);
  const [showTree, setShowTree] = useState(false);
  const [parserOutput, setParserOutput] = useState<{
    history: History[];
    tree?: TreeNode;
    error: boolean;
  }>();

  const processCode = () => {
    setTokens(lexicAnalyzer(input));
    setParserOutput(parserAnalyzer(input));
  };

  return (
    <div className='container grid grid-cols-2 gap-4 p-4 h-screen'>
      <TextEditor input={input} setInput={setInput} />
      <div className='flex flex-col'>
        <LexicAnalyzer tokens={tokens} />
        <Parser
          history={!parserOutput?.error ? parserOutput?.history : undefined}
        />
        <div className='flex flex-col my-2' onClick={processCode}>
          <Button className='mb-2'>
            <FontAwesomeIcon icon={faGears} className='mr-2' /> Procesar código
          </Button>
          <Button
            disabled={!parserOutput?.tree}
            onClick={() => setShowTree(true)}
          >
            <FontAwesomeIcon icon={faTree} className='mr-2' />
            Ver árbol
          </Button>
        </div>
        {parserOutput?.error ? (
          <div className='flex justify-end p-2'>
            <p className='font-bold text-red-500'>La entrada no es válida</p>
          </div>
        ) : null}
        {showTree ? (
          <TreeView
            data={parserOutput?.tree}
            onDismiss={() => setShowTree(false)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Layout;
