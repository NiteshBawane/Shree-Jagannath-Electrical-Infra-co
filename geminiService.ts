
import { GoogleGenAI } from "@google/genai";

/**
 * Professional assistant service for 'Shree Jagannath Electricals & Infra Co.'
 * uses the latest Gemini 3 Flash model for project advice.
 */

export const getSmartQuoteAdvice = async (userMessage: string, lang: string) => {
  // Always initialize GoogleGenAI inside or right before the call to ensure latest API key usage
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional assistant for 'Shree Jagannath Electricals & Infra Co.', a government-registered electrical contractor in Bhadravati, Maharashtra. 
      The user is asking for a quote or project advice: "${userMessage}".
      Respond in ${lang === 'mr' ? 'Marathi' : lang === 'hi' ? 'Hindi' : 'English'}.
      Be professional, trust-building, and suggest which of our services (HT/LT line, Transformer, Wiring, Substation, Material Supply) fits their need.
      Mention that Er. Rupesh Dhavas and his team will review the details soon. Keep it under 100 words.`,
      config: {
        temperature: 0.7,
      },
    });

    // Access .text property directly (do not call as a method)
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
