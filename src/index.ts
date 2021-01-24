import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';



const numbersCollection = new NumbersCollection([0, -5, 10, 3]);
numbersCollection.sort();
console.log(numbersCollection.collection);


const charsCollection = new CharactersCollection("PoaJB");
charsCollection.sort();
console.log(charsCollection.collection);


const linkedList = new LinkedList();
linkedList.add(0);
linkedList.add(-5);
linkedList.add(10);
linkedList.add(3);
linkedList.sort();
linkedList.print();
