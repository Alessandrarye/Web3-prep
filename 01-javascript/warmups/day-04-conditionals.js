console.log("I ran day 04");
let isReady = true;

if (isReady) {
    console.log("Student is ready to start the bootcamp.");
} else {
    console.log("Student is not ready yet.");   
}

let student = {
    name: "Sandra",
    track: "solidity",
    isReady: true
};

if (student.isReady) {
    console.log(`${student.name} can begin the ${student.track} track.`);
} else {
    console.log(`${student.name} needs more prep.`);        
}

if (canEnroll(student)) {
    console.log("Enroll student in Solidity bootcmp.");
} else {
    console.log("student does not meet enrollment requirements.");
}

function canEnroll(student) {
    if (!student.isReady) {
        return false;
    }
    if (student.track !== "solidity" {
        return false;
    }
    return true;
}

console.log("Can enroll:",
    canEnroll(student));
