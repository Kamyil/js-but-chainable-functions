import { If } from './keywords/if';
import { Switch } from './keywords/switch';
import './style.css';

const print = (...contentToLog: unknown[]) => console.log(...contentToLog);


type PossibleIndexes = 1 | 2 | 3 | 4 | 5 | 6 | number;

let myNumber: PossibleIndexes = 1;

export function For<T>(array: Array<T>) {
  


  return {
    each(elementInArray: T) {

    }
  }
}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }
// Switch(myNumber)
//   .case(1).then(() => print('number is 1'))
//   .case(2).then(() => print('number is 2'))
//   .case(3).then(() => print('number is 3'))
//   .case(4).then(() => print('number is 4'))
//   .case(5).then(() => print('number is 5'));

// If(number > 4).then(() => print('its higher number than 4!'))
//   .elseIf(number === 4).then(() => print('its equal to 4!'))
//   .elseIf(number < 4).then(() => print('its smaller than 4'))

export {
  If,
  Switch
}

