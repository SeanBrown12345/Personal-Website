import type { VercelRequest, VercelResponse } from '@vercel/node';
import { systemMessage } from "../src/ChatBot/systemmessage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'ft:gpt-4o-2024-08-06:personal:seanbot:BIjW4IEM',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: message },
        ],
      }),
    });

    const data = await openaiRes.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from OpenAI' });
  }
}
