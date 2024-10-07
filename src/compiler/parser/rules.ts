export const rules = {
  1: {
    rule: '<program> ::= <definitions>',
    noTerminal: 'program',
    symbolsSequense: ['definitions'],
    symbolsNumber: 1,
  },
  2: {
    rule: '<definitions> ::= \\e',
    noTerminal: 'definitions',
    symbolsSequense: [],
    symbolsNumber: 0,
  },
  3: {
    rule: '<definitions> ::= <definition> <definitions>',
    noTerminal: 'definitions',
    symbolsSequense: ['definition', 'definitions'],
    symbolsNumber: 2,
  },
  4: {
    rule: '<definition> ::= <defVariable>',
    noTerminal: 'definition',
    symbolsSequense: ['defVariable'],
    symbolsNumber: 1,
  },
  5: {
    rule: '<definition> ::= <defFunction>',
    noTerminal: 'definition',
    symbolsSequense: ['defFunction'],
    symbolsNumber: 0,
  },
  6: {
    rule: '<defVariable> ::= type indentifier <variableList> ; ',
    noTerminal: '',
    symbolsSequense: ['type', 'indentifier', 'variableList', ';'],
    symbolsNumber: 4,
  },
  7: {
    rule: '<variableList> ::= \\e',
    noTerminal: 'variableList',
    symbolsSequense: [],
    symbolsNumber: 0,
  },
  8: {
    rule: '<variableList> ::= , identifier <variableList>',
    noTerminal: 'variableList',
    symbolsSequense: [',', 'identifier', 'variableList'],
    symbolsNumber: 0,
  },
  9: {
    rule: '<defFunction> ::= type identifier ( <parameters> ) <functionBlock>',
    noTerminal: 'defFunction',
    symbolsSequense: [
      'type',
      'identifier',
      '(',
      'parameters',
      ')',
      'functionBlock',
    ],
    symbolsNumber: 6,
  },
  10: {
    rule: '<parameters> ::= \\e',
    noTerminal: 'parameters',
    symbolsSequense: [],
    symbolsNumber: 0,
  },
};
