import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateRecap = async (
  opponent: string,
  result: string,
  score: string,
  highlights: string
): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your configuration.";
  }

  try {
    const prompt = `
      Write an exciting, journalistic sports match recap for the Saint Jude Catholic School football team (The Green Knights).
      
      Match Details:
      - Opponent: ${opponent}
      - Result: ${result}
      - Score: ${score}
      - Key Highlights provided by coach: ${highlights}

      Tone: Professional, energetic, inspiring (like a high-end sports website).
      Length: Approximately 150-200 words.
      Format: Plain text with paragraph breaks.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Could not generate recap.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating the recap. Please try again.";
  }
};