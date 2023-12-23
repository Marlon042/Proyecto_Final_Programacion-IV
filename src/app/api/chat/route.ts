import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const Config = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(Config);

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: "Comportate como si fueras un asistente de buses para una pagina web",
      },
    {
      role: 'user',
      content: 'Hola cuentame sobre la pagina',
    }
    ],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
