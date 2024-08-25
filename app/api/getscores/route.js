import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app', 'data', 'QuizData.json');
    const jsonData = await fs.readFile(filePath, 'utf8');

    let data = [];
    if (jsonData) {
      try {
        data = JSON.parse(jsonData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error reading data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch scores' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}


