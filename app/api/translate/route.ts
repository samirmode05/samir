// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // add key in env file
// });

// export async function POST(req: Request) {
//   const { html, target } = await req.json();

//   const prompt = `
//   Translate the following HTML content into ${target}.
//   Keep all HTML tags, structure, formatting EXACTLY the same.
//   Only translate the text inside the tags.

//   HTML:
//   ${html}
//   `;

//   const response = await client.chat.completions.create({
//     model: "gpt-4o-mini",  
//     messages: [{ role: "user", content: prompt }],
//   });

//   const translated = response.choices[0].message.content;

//   return NextResponse.json({ translated });
// }
