var s = "test";
console.log("OUTPUT: s", s);
s.len = 4;
console.log("OUTPUT: s after set a property", s);

var t = s.len;
console.log("OUTPUT: t", t);
