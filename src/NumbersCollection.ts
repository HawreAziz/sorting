import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
    constructor(private data: number[]) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    get collection(): number[] {
        return this.data;
    }

    swap(leftHand: number, rightHand: number): void {
        const leftValue = this.data[leftHand];
        this.data[leftHand] = this.data[rightHand];
        this.data[rightHand] = leftValue;
    }

    compare(leftHand: number, rightHand: number): boolean {
        return this.data[leftHand] > this.data[rightHand];
    }
}