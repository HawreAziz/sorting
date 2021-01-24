"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var _Node = /** @class */ (function () {
    function _Node(data) {
        this.data = data;
        this.next = null;
    }
    return _Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var node = this.head;
            var counter = 0;
            while (node) {
                counter++;
                node = node.next;
            }
            return counter;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (data) {
        var node = new _Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index out of range.");
        }
        var node = this.head;
        var counter = -1;
        while (node) {
            counter++;
            if (counter === index) {
                return node;
            }
            node = node.next;
        }
        throw new Error("Index out of range");
    };
    LinkedList.prototype.compare = function (leftHand, rightHand) {
        if (!this.head) {
            throw new Error("Cannot compare, since head does not exist");
        }
        return this.at(leftHand).data > this.at(rightHand).data;
    };
    LinkedList.prototype.swap = function (leftHand, rightHand) {
        if (!this.head) {
            throw new Error("Empty linked list");
        }
        var leftNode = this.at(leftHand);
        var rightNode = this.at(rightHand);
        var leftValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftValue;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            throw new Error("List cannot be empty");
        }
        var tail = this.head;
        while (tail) {
            console.log(tail.data);
            tail = tail.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
