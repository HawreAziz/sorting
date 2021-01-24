import { Sorter } from './Sorter';

class _Node {
    next: _Node | null = null;
    constructor(public data: number) { }
}


export class LinkedList extends Sorter {
    head: _Node | null = null;


    get length(): number {
        if (!this.head) {
            return 0;
        }
        let node: _Node | null = this.head;
        let counter = 0;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    add(data: number): void {
        const node = new _Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    at(index: number): _Node {
        if (!this.head) {
            throw new Error("Index out of range.");
        }
        let node: _Node | null = this.head;
        let counter = -1;
        while (node) {
            counter++;
            if (counter === index) {
                return node;
            }
            node = node.next;
        }
        throw new Error("Index out of range");

    }

    compare(leftHand: number, rightHand: number): boolean {
        if (!this.head) {
            throw new Error("Cannot compare, since head does not exist");
        }
        return this.at(leftHand).data > this.at(rightHand).data;
    }


    swap(leftHand: number, rightHand: number): void {
        if (!this.head) {
            throw new Error("Empty linked list");
        }
        const leftNode = this.at(leftHand);
        const rightNode = this.at(rightHand);
        const leftValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftValue;
    }

    print() {
        if (!this.head) {
            throw new Error("List cannot be empty");
        }

        let tail: _Node | null = this.head;
        while (tail) {
            console.log(tail.data);
            tail = tail.next;
        }
    }
}