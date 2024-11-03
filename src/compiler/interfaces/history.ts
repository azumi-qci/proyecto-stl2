import { StackElement } from '../classes/stackElement';

export interface History {
  stack: StackElement[];
  input: string;
  output: number;
}
