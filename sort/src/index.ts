import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('aXaJito');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
numbersCollection.sort();
charactersCollection.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
