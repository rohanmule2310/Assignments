// Original Sentence
let sentence: string = "Java programming is fun and challenging";

console.log("Original Sentence:");
console.log(sentence);

// 1. Count the total number of words
let words: string[] = sentence.trim().split(/\s+/);
console.log("\n1. Total Number of Words: " + words.length);

// 2. Print the sentence words in reverse order
let reverseSentence: string = words.slice().reverse().join(" ");
console.log("\n2. Sentence in Reverse Order:");
console.log(reverseSentence);

// 3. Convert the first character of each word to uppercase
let capitalizedSentence: string = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

console.log("\n3. Sentence with First Letter of Each Word Capitalized:");
console.log(capitalizedSentence);