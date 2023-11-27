import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";

const llm = new OpenAI({
  temperature: 0.9,
});

const input = document.querySelector("#input");

const answer = document.querySelector("#answer");

const chatModel = new ChatOpenAI();

const text = input.ariaValueMax;

const llmResult = await llm.predict(text);

const chatModelResult = await chatModel.predict(text);