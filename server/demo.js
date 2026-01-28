const url = "http://localhost:3000/api/resume";
const response = await fetch(url);

if (response.ok) {
    const contentType = response.headers.get('Content-Type');

    // console.log(`Response: ${response}`);
    // console.log(`Content-Type: ${contentType}`);

    if (contentType.startsWith("application/json")) {
        const resume = await response.json();
        // console.log(`Resume (JSON): ${resume}`);
        //console.log(`Resume: ${JSON.stringify(resume)}`);
        console.log(`LinkedIn for ${resume.name} is ${resume.linkedin}`);
    }
}