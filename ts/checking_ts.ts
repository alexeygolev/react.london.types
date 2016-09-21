
function myArea(r): number {
    return Math.PI * r * r;
}

const myResult = myArea("1o");

function size(input) {
    return input.length
}

const result = size(null)

// Binary tree
interface Leaf {
    kind: "leaf";
    value: number;
}

interface Branch {
    kind: "branch";
    left: BinaryTree;
    right: BinaryTree;
}

type BinaryTree = Leaf | Branch

function sumLeaves(tree: BinaryTree): number {
    switch (tree.kind) {
        case "leaf":
            return tree.value
        case "branch":
            return sumLeaves(tree.left) + sumLeaves(tree.left)
    }
}

const s: string | null = null

declare function f(x: number): string;
let x: number | null | undefined;
if (x) {
    f(x);  // Ok, type of x is number here
}
else {
    f(x);  // Error, type of x is number? here
}
let a = x != null ? f(x) : "";
let b = x && f(x);

// Flow analysis

type Square = {
  kind: "square";
  size: number;
}

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
}

type Circle = {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case "square": return s.size * s.size;
    case "rectangle": return s.width * s.height;
    case "circle": return Math.PI * s.radius * s.radius;
  }
}
// find?
const xs = [ 1, 2, 3, 4]
const num = xs.find(x => x > 4)
