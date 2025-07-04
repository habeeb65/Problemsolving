// =========================
// 💡 BASIC SYNTAX
// =========================

// Variables
let x = 10;
const y = 20; // constant
var z = 30;   // old-style

// Data types
let str = "hello";     // string
let num = 123;         // number
let bool = true;       // boolean
let arr = [1, 2, 3];   // array
let obj = {a: 1};      // object
let nul = null;        // null
let und = undefined;   // undefined

// =========================
// 🔁 LOOPS
// =========================

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  i++;
}

// For...of (arrays)
for (let n of [1, 2, 3]) {
  console.log(n);
}

// For...in (objects)
for (let key in {a: 1, b: 2}) {
  console.log(key);
}

// =========================
// 🎯 FUNCTIONS
// =========================

function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

// Default parameters
function greet(name = "guest") {
  return `Hello, ${name}`;
}

// =========================
// 📦 ARRAYS
// =========================

let nums = [1, 2, 3, 4, 5];

// Basic methods
nums.push(6);         // [1,2,3,4,5,6]
nums.pop();           // [1,2,3,4,5]
nums.shift();         // [2,3,4,5]
nums.unshift(1);      // [1,2,3,4,5]

// Looping
nums.forEach(n => console.log(n));
let doubled = nums.map(n => n * 2);
let even = nums.filter(n => n % 2 === 0);
let sum = nums.reduce((a, b) => a + b, 0);

// Sort
nums.sort((a, b) => a - b); // ascending
nums.sort((a, b) => b - a); // descending

// =========================
// 📒 STRINGS
// =========================

let s = "leetcode";
s.length;
s[0];                // 'l'
s.charAt(2);         // 'e'
s.slice(1, 4);       // 'eet'
s.includes("code");  // true
s.indexOf("e");      // 1
s.toUpperCase();     // 'LEETCODE'
s.split("");         // ['l','e','e','t'...]
s.replace("leet", "code"); // 'codecode'

// =========================
// 🗃️ OBJECTS
// =========================

let user = {
  name: "Habeeb",
  age: 22
};

console.log(user.name);     // 'Habeeb'
console.log(user["age"]);   // 22
user.location = "India";    // add key
delete user.age;            // remove key

// Object methods
Object.keys(user);          // ['name', 'location']
Object.values(user);        // ['Habeeb', 'India']
Object.entries(user);       // [['name', 'Habeeb'], ['location', 'India']]

// =========================
// 🧠 SET & MAP
// =========================

let set = new Set([1, 2, 2, 3]);  // {1,2,3}
set.add(4);
set.has(2);      // true
set.delete(1);
[...set];        // convert to array

let map = new Map();
map.set("a", 1);
map.get("a");     // 1
map.has("a");     // true
map.delete("a");

// =========================
// 🧮 MATH UTILITIES
// =========================

Math.max(1, 5, 3);        // 5
Math.min(1, 5, 3);        // 1
Math.floor(4.7);          // 4
Math.ceil(4.1);           // 5
Math.round(4.5);          // 5
Math.abs(-7);             // 7
Math.sqrt(16);            // 4

// =========================
// 🔄 TYPE CONVERSIONS
// =========================

// String to number
let a = parseInt("123");  // 123
let b = +"456";           // 456

// Number to string
String(789);              // "789"
789 + "";                 // "789"

// Array to string
[1,2,3].join(", ");       // "1, 2, 3"

// =========================
// 🛠️ UTILITY SNIPPETS
// =========================

// Swap two variables
let x = 1, y = 2;
[x, y] = [y, x];

// Count frequency of elements
let freq = {};
for (let n of [1, 2, 2, 3]) {
  freq[n] = (freq[n] || 0) + 1;
}

// Clone array / object
let copyArr = [...nums];
let copyObj = {...user};

// =========================
// ✅ COMMON LEETCODE PATTERNS
// =========================

// Two pointers
let l = 0, r = nums.length - 1;
while (l < r) {
  // logic
  l++;
  r--;
}

// Sliding window
let sumWindow = 0, k = 3;
for (let i = 0; i < k; i++) sumWindow += nums[i];
for (let i = k; i < nums.length; i++) {
  sumWindow += nums[i] - nums[i - k];
}

// HashMap lookup
let map2 = new Map();
for (let i = 0; i < nums.length; i++) {
  let diff = target - nums[i];
  if (map2.has(diff)) return [map2.get(diff), i];
  map2.set(nums[i], i);
}

