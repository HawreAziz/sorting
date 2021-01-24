import { Sorter } from './Sorter';


export class CharactersCollection extends Sorter {

    constructor(private data: string) {
        super();
    }


    get collection(): string {
        return this.data;
    }

    get length(): number {
        return this.data.length;
    }

    swap(leftHand: number, rightHand: number): void {
        const collection = this.data.split('');
        const leftValue = collection[leftHand];
        collection[leftHand] = collection[rightHand];
        collection[rightHand] = leftValue;
        this.data = collection.join('');

    }

    compare(leftHand: number, rightHand: number): boolean {
        return this.data[leftHand].toLowerCase() > this.data[rightHand].toLowerCase();
    }
}