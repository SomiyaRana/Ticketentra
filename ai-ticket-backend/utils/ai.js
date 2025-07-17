import { createAgent, gemini } from "@inngest/agent-kit";

const analyzeTicket = async (ticket) => {
  const supportAgent = createAgent({
    model: gemini({
      model: "gemini-1.5-flash-8b",
      apiKey: process.env.GEMINI_API_KEY,
    }),

    name: "AI Ticket Triage Assistant",
    system: `You are an expert AI assistant that processes technical support tickets.

Your job is to:
1. Summarize the issue.
2. Estimate its priority.
3. Provide helpful notes and resource links for human moderators.
4. List relevant technical skills required.


IMPORTANT:
-Respond with *only* valid raw JSON.
-Do not include markdone, code fences, comments, or any extra formatting.
-the format must be a raw JSON object.

Repeat: Do nto wrap your output in markdone or code fences.`,
  });

  const response =
    await supportAgent.run(`You are ticket triage agent. Only return a strict
JSON object with no extra text , headers , or markdown.

Analyze the following support ticket and provide a JOSN  object with :

-summary: A short 1-2 sentence summary of the issue.
-priority: One of "low", "medium", or "high".
-helpfulNotes: A detailed technical explanation that a moderator can use to solve this issue. Include useful externl
links or resources if possible.

Respond ONLY in this JOSN format and do not include any other text or markdown in the answer:

{
"summary": "Short summary of the ticket",
"priority": "high",
"helpfulNotes":"Here are useful tips...",
"relatedSkills":["React", "Node.js"]}

---

Ticket information:

- Ticket: ${ticket.title}
- Description: ${ticket.description}`);

const raw = response.output[0].content

try {
  const match = raw.match(/```json\s*([\s\S]*?)\s*```/i)
  const jsonString = match? match[1]: raw.trim()
  return JSON.parse(jsonString)
} catch (e) {
  console.log("Failed to parse JSON form AI response" + e.message)

  return null //watch out for this
  
}
};


export default analyzeTicket; 