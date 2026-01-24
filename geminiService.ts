
import { GoogleGenAI } from "@google/genai";

/**
 * Professional assistant service for 'Shree Jagannath Electricals & Infra Co.'
 * uses the latest Gemini 3 Flash model for project advice.
 */

export const getSmartQuoteAdvice = async (userMessage: string, lang: string) => {
  // Always use process.env.API_KEY directly for initialization as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional technical consultant for 'Shree Jagannath Electricals & Infra Co.', an A-Class Government Registered Electrical Contractor in Bhadravati, Chandrapur, Maharashtra. 
      Proprietor: Er. Rupesh Dhawas.
      
      User asks: "${userMessage}".
      Respond in ${lang === 'mr' ? 'Marathi' : lang === 'hi' ? 'Hindi' : 'English'}.
      
      Guidelines:
      1. Be professional, technical, and trust-building.
      2. Mention that we specialize in MSEDCL (Mahavitaran) projects, HT/LT lines, Sub-stations, and Transformers.
      3. Suggest that the team will provide a precise quote after a site visit.
      4. Keep the response under 120 words.
      5. Sound like a helpful local expert from Maharashtra.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Directly access the text property of GenerateContentResponse
    return response.text || (lang === 'mr' ? "मी तुमची विनंती समजू शकलो नाही. कृपया पुन्हा प्रयत्न करा." : "I couldn't process that request. Please try again.");
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // Return a graceful error message indicating communication difficulty
    return lang === 'mr' 
      ? "संपर्क साधण्यात अडचण येत आहे. कृपया आम्हाला ८४११००७२५९ वर कॉल करा." 
      : "Connection error. Please call us at 8411007259.";
  }
};
