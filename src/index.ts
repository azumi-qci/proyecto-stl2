import 'colors';

import { LexicAnalyzer } from './lexic-analyzer';

function main(): void {
  console.log('\n- Analizador léxico -'.underline.green);
  console.log('Símbolo\t\tTipo'.bgBlue);

  let analyzer = new LexicAnalyzer('new hello 88.2');

  while (true) {
    let [symbol, type] = analyzer.nextSymbol();

    console.log(`${symbol}\t\t${type} `);

    if (symbol === '~') {
      break;
    }
  }
}

// Call main function
main();
