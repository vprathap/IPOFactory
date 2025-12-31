
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIAdvisorResponse = async (userQuery: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the ScaleShop AI Strategy Advisor. 
      Your goal is to help Indian SME owners (like Raju bhai) scale their business from a single kirana/shop to a multi-city franchise ready for an IPO.
      Context: ${context}
      User Query: ${userQuery}
      Guidelines:
      1. Be encouraging but data-driven.
      2. Use simple business terms.
      3. Reference the ScaleShop AI ecosystem (Inventory, Franchise, Governance).
      4. Always end with a clear 'Next Step' to scale.`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Advisor Error:", error);
    return "I'm having trouble connecting to the strategy network. Please try again in a moment.";
  }
};

export const getScaleSimulation = async (businessType: string, currentRev: number) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a 5-year scaling roadmap for a ${businessType} making ₹${currentRev}/month in India.`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    roadmap: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                year: { type: Type.STRING },
                                shops: { type: Type.NUMBER },
                                projectedRevenue: { type: Type.STRING },
                                keyAction: { type: Type.STRING }
                            },
                            required: ["year", "shops", "projectedRevenue", "keyAction"]
                        }
                    }
                },
                required: ["roadmap"]
            }
        }
      });
      return JSON.parse(response.text.trim());
    } catch (error) {
        console.error("Scale Simulation Error:", error);
        return null;
    }
}
