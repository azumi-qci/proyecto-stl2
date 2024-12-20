import { Rules } from '../interfaces/rules';

export const rules: Rules = {
  1: {
    rule: '<program> ::= <definitions>',
    noTerminal: 'program',
    symbolsSequence: ['definitions'],
    symbolsNumber: 1,
  },
  2: {
    rule: '<definitions> ::= \\e',
    noTerminal: 'definitions',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  3: {
    rule: '<definitions> ::= <definition> <definitions>',
    noTerminal: 'definitions',
    symbolsSequence: ['definition', 'definitions'],
    symbolsNumber: 2,
  },
  4: {
    rule: '<definition> ::= <variableDef>',
    noTerminal: 'definition',
    symbolsSequence: ['variableDef'],
    symbolsNumber: 1,
  },
  5: {
    rule: '<definition> ::= <functionDef>',
    noTerminal: 'definition',
    symbolsSequence: ['functionDef'],
    symbolsNumber: 0,
  },
  6: {
    rule: '<variableDef> ::= type indentifier <variableList> ;',
    noTerminal: 'variableDef',
    symbolsSequence: ['type', 'indentifier', 'variableList', ';'],
    symbolsNumber: 4,
  },
  7: {
    rule: '<variableList> ::= \\e',
    noTerminal: 'variableList',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  8: {
    rule: '<variableList> ::= , identifier <variableList>',
    noTerminal: 'variableList',
    symbolsSequence: [',', 'identifier', 'variableList'],
    symbolsNumber: 0,
  },
  9: {
    rule: '<functionDef> ::= type identifier ( <parameters> ) <functionBlock>',
    noTerminal: 'functionDef',
    symbolsSequence: [
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
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  11: {
    rule: '<parameters> ::= type identifier <parameterList> ',
    noTerminal: 'parameters',
    symbolsSequence: ['type', 'identifier', 'parameterList'],
    symbolsNumber: 3,
  },
  12: {
    rule: '<parameterList> ::= e ',
    noTerminal: 'parameterList',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  13: {
    rule: '<parameterList> ::= , type identifier <parameterList>',
    noTerminal: 'parameterList',
    symbolsSequence: ['type', 'identifier', 'parameterList'],
    symbolsNumber: 3,
  },
  14: {
    rule: '<functionBlock> ::= { <localDefinitions> }',
    noTerminal: 'functionBlock',
    symbolsSequence: ['{', 'localDefinitions', '}'],
    symbolsNumber: 3,
  },
  15: {
    rule: '<localDefinitions> ::= e',
    noTerminal: 'localDefinitions',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  16: {
    rule: '<localDefinitions> ::= <localDefinition> <localDefinitions>',
    noTerminal: 'localDefinitions',
    symbolsSequence: ['localDefinition', 'localDefinitions'],
    symbolsNumber: 2,
  },
  17: {
    rule: '<localDefinition> ::= <variableDefinition>',
    noTerminal: 'localDefinition',
    symbolsSequence: ['variableDefinition'],
    symbolsNumber: 1,
  },
  18: {
    rule: '<localDefinition> ::= <sentence>',
    noTerminal: 'localDefinition',
    symbolsSequence: ['sentence'],
    symbolsNumber: 1,
  },
  19: {
    rule: '<sentences> ::= e',
    noTerminal: 'sentences',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  20: {
    rule: '<sentences> ::= <sentence> <sentences>',
    noTerminal: 'sentences',
    symbolsSequence: ['sentence', 'sentences'],
    symbolsNumber: 2,
  },
  21: {
    rule: '<sentence> ::= identifier = <expression> ; ',
    noTerminal: 'sentence',
    symbolsSequence: ['identifier', '=', 'expression', ';'],
    symbolsNumber: 4,
  },
  22: {
    rule: '<sentence> ::= if ( <expression> ) <sentenceBlock> <other>',
    noTerminal: 'sentence',
    symbolsSequence: ['if', '(', 'expression', ')', 'sentenceBlock', 'other'],
    symbolsNumber: 6,
  },
  23: {
    rule: '<sentence> ::= while ( <expression> ) <block>',
    noTerminal: 'sentence',
    symbolsSequence: ['while', '(', 'expression', ')', 'block'],
    symbolsNumber: 5,
  },
  24: {
    rule: '<sentence> ::= return <returnValue> ;',
    noTerminal: 'sentence',
    symbolsSequence: ['return', 'returnValue', ';'],
    symbolsNumber: 3,
  },
  25: {
    rule: '<sentence> ::= <functionCall> ;',
    noTerminal: 'sentence',
    symbolsSequence: ['functionCall', ';'],
    symbolsNumber: 2,
  },
  26: {
    rule: '<other> ::= e ',
    noTerminal: 'other',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  27: {
    rule: '<other> ::= else <sentenceBlock>',
    noTerminal: 'other',
    symbolsSequence: ['else', 'sentenceBlock'],
    symbolsNumber: 2,
  },
  28: {
    rule: '<block> ::= { <sentences> }',
    noTerminal: 'block',
    symbolsSequence: ['{', 'sentences', '}'],
    symbolsNumber: 3,
  },
  29: {
    rule: '<returnValue> ::= e',
    noTerminal: 'returnValue',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  30: {
    rule: '<returnValue> ::= <expression>',
    noTerminal: 'returnValue',
    symbolsSequence: ['expression'],
    symbolsNumber: 1,
  },
  31: {
    rule: '<arguments> ::= e',
    noTerminal: 'arguments',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  32: {
    rule: '<arguments> ::= <expression> <argumentList>',
    noTerminal: 'arguments',
    symbolsSequence: ['expression', 'argumentList'],
    symbolsNumber: 2,
  },
  33: {
    rule: '<argumentList> ::= e',
    noTerminal: 'argumentList',
    symbolsSequence: [],
    symbolsNumber: 0,
  },
  34: {
    rule: '<argumentList> ::= , <expression> <argumentList>',
    noTerminal: 'argumentList',
    symbolsSequence: [',', 'expression', 'argumentList'],
    symbolsNumber: 3,
  },
  35: {
    rule: '<end> ::= <functionCall>',
    noTerminal: 'end',
    symbolsSequence: ['functionCall'],
    symbolsNumber: 1,
  },
  36: {
    rule: '<end> ::= identifier',
    noTerminal: 'end',
    symbolsSequence: ['identifier'],
    symbolsNumber: 1,
  },
  37: {
    rule: '<end> ::= integer',
    noTerminal: 'end',
    symbolsSequence: ['integer'],
    symbolsNumber: 1,
  },
  38: {
    rule: '<end> ::= real',
    noTerminal: 'end',
    symbolsSequence: ['real'],
    symbolsNumber: 1,
  },
  39: {
    rule: '<end> ::= string',
    noTerminal: 'end',
    symbolsSequence: ['string'],
    symbolsNumber: 1,
  },
  40: {
    rule: '<functionCall> ::= identifier ( <arguments> )',
    noTerminal: 'functionCall',
    symbolsSequence: ['identifier', '(', 'arguments', ')'],
    symbolsNumber: 4,
  },
  41: {
    rule: '<sentenceBlock> ::= <sentence>',
    noTerminal: 'sentenceBlock',
    symbolsSequence: ['sentence'],
    symbolsNumber: 1,
  },
  42: {
    rule: '<sentenceBlock> ::= <block>',
    noTerminal: 'sentenceBlock',
    symbolsSequence: ['block'],
    symbolsNumber: 1,
  },
  43: {
    rule: '<expression> ::= ( <expression> )',
    noTerminal: 'expression',
    symbolsSequence: ['(', 'expression', ')'],
    symbolsNumber: 3,
  },
  44: {
    rule: '<expression> ::= additionOperator <expression>',
    noTerminal: 'expression',
    symbolsSequence: ['additionOperator', 'expression'],
    symbolsNumber: 2,
  },
  45: {
    rule: '<expression> ::= notOperator <expression>',
    noTerminal: 'expression',
    symbolsSequence: ['notOperator', 'expression'],
    symbolsNumber: 2,
  },
  46: {
    rule: '<expression> ::= <expression> multiplicationOperator <expression>',
    noTerminal: 'expression',
    symbolsSequence: ['expression', 'multiplicationOperator', 'expression'],
    symbolsNumber: 3,
  },
  47: {
    rule: '<expression> ::= <expression> additionOperator <expression>',
    noTerminal: 'expression',
    symbolsSequence: ['expression', 'additionOperator', 'expression'],
    symbolsNumber: 3,
  },
  48: {
    rule: '<expression> ::= <expression> relationOperator <expression>',
    noTerminal: 'expression',
    symbolsSequence: ['expression', 'relationOperator', 'expression'],
    symbolsNumber: 3,
  },
  49: {
    rule: '<expression> ::= <expression> equalsOperator <expression>',
    noTerminal: 'expression',
    symbolsSequence: ['expression', 'equalsOperator', 'expression'],
    symbolsNumber: 3,
  },
  50: {
    rule: '<expression> ::= <expression> opAnd <expression>',
    noTerminal: 'expression',
    symbolsSequence: ['expression', 'opAnd', 'expression'],
    symbolsNumber: 3,
  },
  51: {
    rule: '<expression> ::= <expression> opOr <expression>',
    noTerminal: 'expression',
    symbolsSequence: ['expression', 'opOr', 'expression'],
    symbolsNumber: 3,
  },
  52: {
    rule: '<expression> ::= <end>',
    noTerminal: 'expression',
    symbolsSequence: ['end'],
    symbolsNumber: 1,
  },
};
