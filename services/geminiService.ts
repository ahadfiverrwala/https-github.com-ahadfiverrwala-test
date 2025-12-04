import { GoogleGenAI } from "@google/genai";

// NOTE: In a real production app, this key should be proxied through a backend
// to avoid exposing it to the client. For this demo, we assume process.env.API_KEY is available.
const API_KEY = process.env.API_KEY || '';

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

export const generateGigDescription = async (title: string, category: string): Promise<string> => {
  try {
    const ai = getClient();
    const prompt = `Write a professional, persuasive, and SEO-friendly gig description for a freelance marketplace.
    Gig Title: "${title}"
    Category: "${category}"
    
    Structure the description with:
    1. An engaging hook.
    2. What is offered (bullet points).
    3. Why choose me?
    4. A call to action.
    
    Keep it under 200 words. Format with markdown suitable for display.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate description. Please try again.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Error connecting to AI service. Please ensure API Key is valid.";
  }
};