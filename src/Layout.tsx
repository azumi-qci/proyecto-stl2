import { FC, useState } from 'react';

import { Token } from './compiler/interfaces/token';
import { lexicAnalyzer } from './compiler/lexic/lexicAnalyzer';

import LexicAnalyzer from './components/LexicAnalyzer';
import Parser from './components/Parser';
import TextEditor from './components/TextEditor';
import { parserAnalyzer } from './compiler/parser/parserAnalyzer';

const Layout: FC = () => {
  const [input, setInput] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);

  const getTokens = () => {
    const result = lexicAnalyzer(input);

    setTokens(result);
  };

  const parseCode = () => {
    parserAnalyzer(input);
  };

  return (
    <div className='container grid grid-cols-2 gap-4 p-4 h-screen'>
      <TextEditor input={input} setInput={setInput} />
      <div className='flex flex-col'>
        <LexicAnalyzer tokens={tokens} getTokens={getTokens} />
        <Parser parseCode={parseCode} />
      </div>
    </div>
  );
};

export default Layout;
