/* @flow */


function myArea(r) {
    return Math.PI * r * r
}

let myResult = myArea("1o")

function size(input) {
    return input.length
}
let result = size(null)

type BinaryTree =
{ kind: "leaf", value: number } |
{ kind: "branch", left: BinaryTree, right: BinaryTree }
// why default? https://github.com/facebook/flow/issues/451
function sumLeaves(tree: BinaryTree): number {
    switch (tree.kind) {
        case "leaf":
            return tree.value
        default:
            return sumLeaves(tree.left) + sumLeaves(tree.left)
    }
}





class Variance<+Out,-In> {
  foo(x: Out): Out { return x; }
  bar(y: In): In { return y; }
}

class A {}
class B extends A {}


function subtyping(
  v1: Variance<A,B>,
  v2: Variance<B,A>
) {
  (v1: Variance<B,A>); // error on both targs (A ~/~> B)
  (v2: Variance<A,B>); // OK for both targs (B ~> A)
}


declare function f(x: number): string;
let x: number | null;

if (x) {
    f(x);  // Ok, type of x is number here
}
else {
    f(x);  // Error, type of x is number? here
}
let a = x != null ? f(x) : "";
let b = x && f(x);

type Options = {
  location?: {
      x?: number;
      y?: number;
  };
}

function foo(options?: Options) {
    if (options && options.location && options.location.x) {
        const x = options.location.x;  // Type of x is number
    }
}

interface Entity {
    name: string;
}
let z: ?Entity;
let s = z && z.name;  // s is of type string | null
let y = z || { name: "test" };  // y is of type Entity

// Flow analysis
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
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

var obj = { x: 4, y: 2 };
// No error (??)
if(obj.z.w) { }

function fn1(x) { return x * 4; }
fn1('hi'); // Error, expected
fn1(42); // OK

function fn2(x) { return x.length * 4; }
fn2('hi'); // OK
fn2({length: 3}); // OK
fn2({length: 'foo'}); // No error (??)
fn2(42); // Causes error to be reported at function definition, not call (??)

declare function foo1<T>(x:T, y: T): T;
var r = foo1(1, "a"); // no problem, T is just string|number

//$Keys<T>
const l: $Keys<Circle> = 'kind'

//Existential type
const ex: * = 5
ex.map(x => x + 1) //map not found in ex
const ex1: any = 5
ex1.map(x => x + 1) //no problem — ex1 is `any`

//Exact
type Person = {|
  firstName: string,
  lastName: string
|}

const john: Person = { firstName: 'John' }

const personKey: $Keys<Person> = 'firstName'

// Class<T>
class X {
  static bar(): string {
    return 'Hi';
  }
}

var instanceA: X = new X();
instanceA.bar(); // Type error

var instanceB: Class<X> = X
instanceB.bar(); // Good
