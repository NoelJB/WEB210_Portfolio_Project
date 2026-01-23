const url = "http://localhost:3000/api/resume";
const response = await fetch(url);
const resume = await response.json();

console.log(`Response: ${response}`);
console.log(`Resume: ${resume}`);
console.log(resume.name);
console.log(resume.linkedin);
console.log(JSON.stringify(resume));
