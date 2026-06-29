let students: [string, string, string] = ["Suresh", "Mahesh", "Naresh"];
let marks: [number, number, number] = [75, 80, 82];

// Add 10 marks using assignment operator
let updatedMarks: [number, number, number] = [
    marks[0] + 10,
    marks[1] + 10,
    marks[2] + 10
];

// Display updated marks
console.log("Updated Marks:");
console.log(students[0] + ": " + updatedMarks[0]);
console.log(students[1] + ": " + updatedMarks[1]);
console.log(students[2] + ": " + updatedMarks[2]);

// Calculate average
let average: number =
    (updatedMarks[0] + updatedMarks[1] + updatedMarks[2]) / 3;

console.log("Average Marks: " + average.toFixed(1));