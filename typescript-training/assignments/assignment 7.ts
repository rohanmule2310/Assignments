let paragraph = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let words = paragraph.split(" ");

let index = 0;
let count = 0;

for (let i = 0; i < words.length; i++) {

    if (words[i] == "Java") {
        console.log("Java found at index: " + index);
        count++;
    }

    index = index + words[i]!.length + 1;
}

console.log("Total Occurrences: " + count);