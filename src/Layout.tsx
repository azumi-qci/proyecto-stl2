import { faGears } from '@fortawesome/free-solid-svg-icons';
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

const Layout: FC = () => {
  const [input, setInput] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);
  const [parserOutput, setParserOutput] = useState<{
    history: History[];
    tree: TreeNode | null;
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
        <div className='flex my-2' onClick={processCode}>
          <Button className='w-full'>
            <FontAwesomeIcon icon={faGears} /> Procesar código
          </Button>
        </div>
        {parserOutput?.error ? (
          <div className='flex justify-end p-2'>
            <p className='font-bold text-red-500'>La entrada no es válida</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Layout;
