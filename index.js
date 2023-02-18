// Iteration 1: Names and Input
let hacker1;
let hacker2;
hacker2 = 'Marcelo';
hacker1 = 'Marcelo';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);
// Iteration 2: Conditionals

let one = hacker1.length;
let two = hacker2.length;

if (one > two) {
  console.log(`The driver has the longest name it has ${one} characters.`);
} else if (two > one) {
  console.log(`The Navigator has the longest name it has ${two} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${one} characters!`);
}

// Iteration 3: Loops

let up = hacker1.toUpperCase();
const upper = up.split('');
console.log(upper.join(' '));

console.log(one);

let result = '';
for (let i = two - 1; i >= 0; i--) {
  result += hacker2[i];
}
console.log(result);

let order = hacker1.localeCompare(hacker2);

if (order < 0) {
  console.log("The driver's name goes first.");
} else if (order > 0) {
  console.log(' Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
