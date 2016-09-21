function myArea(r) {
    return Math.PI * r * r;
}
var myResult = myArea("1o");
function size(input) {
    return input.length;
}
var result = size(null);
function sumLeaves(tree) {
    switch (tree.kind) {
        case "leaf":
            return tree.value;
        case "branch":
            return sumLeaves(tree.left) + sumLeaves(tree.left);
    }
}
var s = null;
var x;
if (x) {
    f(x);
}
else {
    f(x);
}
var a = x != null ? f(x) : "";
var b = x && f(x);
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius * s.radius;
    }
}
var xs = [1, 2, 3, 4];
var num = xs.find(function (x) { return x > 4; });
