export interface Rules {
  [index: number]: {
    rule: string;
    noTerminal: string;
    symbolsSequence: string[];
    symbolsNumber: number;
  };
}
