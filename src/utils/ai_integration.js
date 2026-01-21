import { GoogleGenerativeAI } from "@google/generative-ai";
import readline from "readline";

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate text using Google Gemini API
async function generateText(prompt) {
    const genAI = new GoogleGenerativeAI("YOUR_API_KEY"); 
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;

        if (response && response.candidates && response.candidates.length > 0) {
            console.log("\nAI Response:\n", response.candidates[0].content);
        } else {
            console.log("\nAI Response: No response received.");
        }
    } catch (error) {
        console.error("Error generating text:", error);
    } finally {
        rl.close();
    }
}

// // Ask user for input
rl.question("Enter your prompt: ", (prompt) => {
    generateText(prompt);
});
