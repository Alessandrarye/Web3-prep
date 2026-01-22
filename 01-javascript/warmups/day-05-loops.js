console.log("I ran day 05");

// 1) Data: an array of objects (real-world pattern)
let students = [
    { name: "Sandra", track: "solidity",
        isReady: true },
    { name: "Alex", track: "frontend",
        isReady: false },
    { name: "Jordan", track: "backend",
        isReady: true }
];

// 2) Helper logic (Step 6): Keep business rules in one place
function enrollmentMessage(student) {
    if (!student.isReady) {
        return `${student.name} needs more prep`;
}

    return `${student.name} can begin training`;
}

console.log("\n--- Classic for loop    (index-based) ---");

// 3) Classic for loop: explicit index control

for (let i = 0; i < students.length; i++) 
{
    console.log(students[i].name);
}

console.log("\n--- for...of loop (readable) ---");
// 4) for...of loop: clean iteration without indexes

for (let student of students) {
    console.log(student.name, "is on the",
        student.track, "track");
    }

    console.log("\n--- Loop + conditional logic (Day 4 + Day 5) ---");
// 5) Loop + conditionals: real-world rule application

 for (let student of students) {
    if (student.isReady) {
        console.log(student.name, "can begin training");
    } else {
        console.log(student.name, "needs more prep");       
    }
 }
 console.log("\n--- Loop using helper function (best practice) ---");
// 6) Loop using helper function: clean and reusable logic

for (let student of students) {
    console.log(enrollmentMessage(student));
}   

// Reflection:
// - What clicked today: 
// - Loops feel like applying rules to each item in a list.
// - What felt confusing?
// - Choosing between for, for...of, and array methods.