import { FC } from 'react';

import { Token } from '../compiler/interfaces/token';
import Button from './Button';

interface LexicAnalyzer {
  tokens: Token[];

  getTokens(): void;
}

const LexicAnalyzer: FC<LexicAnalyzer> = ({ tokens, getTokens }) => {
  return (
    <div className='flex flex-col h-1/2'>
      <div className='flex justify-between items-center mb-2'>
        <p className='font-bold px-2 rounded text-lg'>Tokens obtenidos</p>
        <Button onClick={getTokens}>Analizar código</Button>
      </div>
      <div className='flex flex-col bg-gray-500 rounded h-80'>
        <div className='grid grid-cols-3 font-bold p-2 text-white border-b border-gray-400'>
          <p>ID</p>
          <p>Símbolo</p>
          <p>Valor</p>
        </div>
        {tokens.length ? (
          <div className='flex flex-col grow overflow-scroll'>
            {tokens.map((item, index) => (
              <div
                className='grid grid-cols-3 px-2 py-1 text-gray-300'
                key={`item-${item.token}-${index}`}
              >
                <p>{item.id}</p>
                <p>{item.token}</p>
                <p>{item.lexeme}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex p-4 justify-center items-center grow'>
            <p className='text-white text-lg text-center'>Sin tokens</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LexicAnalyzer;
