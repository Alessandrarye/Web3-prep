/**
 * Day 01 — Basics (15 minutes)
 *
 * Why this exists:
 * - Bootcamps move fast. You want basic syntax to feel automatic.
 * - Solidity feels like "JavaScript-ish rules + stricter types + blockchain state."
 *
 * Solidity mapping:
 * - Variables + types here  -> state variables in Solidity (uint, bool, address, string)
 * - if/else here            -> require/if in Solidity for checks and control flow
 * - loops here              -> loops exist in Solidity but you must be careful with gas
 */

console.log("I ran Day 01");

// 1) Variables + types (2 minutes)
// Why: Solidity is type-focused. Practice noticing types in JS first.
let student = {
    name: "Sandra",
    year: 2026,
    isReady: true,
    track: "solidity",
}

console.log(student );

// 2) Simple function (3 minutes)
// Why: Functions are the core unit of work in JS and Solidity.
function greet($student) {
    // TODO: return "Hello, <student.name>!"
    return `Hello, ${student.name}!`;
}

console.log("greet(student) =>", greet(student), " expected: Hello, Sandra!");

// 3) Conditionals (3 minutes)
// Why: Solidity uses checks constantly (require/if). This builds the reflex.
function canEnterBootcamp(hoursPerWeek) {
    // TODO: return true if hoursPerWeek >= 15, else false
    return hoursPerWeek >= 15;
}

console.log("canEnterBootcamp(10) =>", canEnterBootcamp(10), " expected: false");
console.log("canEnterBootcamp(20) =>", canEnterBootcamp(20), " expected: true");

// 4) Loop (3 minutes)
// Why: Loops exist in Solidity but can be expensive (gas). We'll practice carefully.
function sumUpTo(n) {
    // TODO: return 1 + 2 + ... + n
    // Hint: start total at 0, loop i from 1 to n
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log("sumUpTo(5) =>", sumUpTo(5), " expected: 15");

// 5) Mini reflection (2 minutes)
// Why: Bootcamp success = noticing what you do/don’t understand.
console.log("\nReflection:");
console.log("- What clicked today?");
console.log("- What felt confusing?");