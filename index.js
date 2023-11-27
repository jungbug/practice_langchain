import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";

import { GPT_API } from "@env"

const llm = new OpenAI({
  temperature: 0.9, // 낮을수록 보수적인 답변
});

console.log(GPT_API)

const input = document.querySelector("#input");

const answer = document.querySelector("#answer");

const answer1 = document.querySelector("#answer1");

const chatModel = new ChatOpenAI();

const text = input.ariaValueMax;

const llmResult = await llm.predict(text);

const chatModelResult = await chatModel.predict(text);

answer.innerHTML = llmResult;

answer1.innerHTML = chatModelResult;
