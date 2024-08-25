import fs from 'fs/promises';
import path from 'path';

export async function POST(req) {
    try {
        if (!req.body) {
            throw new Error('Request body is empty');
        }

        const { name, score, category } = await req.json();

        if (!name || typeof score === 'undefined' || !category) {
            throw new Error('Invalid input');
        }

        const filePath = path.join(process.cwd(), 'app', 'data', 'QuizData.json');

        let data = [];
        try {
            const jsonData = await fs.readFile(filePath, 'utf8');
            data = JSON.parse(jsonData);
        } catch (error) {
            console.error('Error reading data:', error);
        }

        const formatDate = (date) => {
            const options = {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata'
            };
            return date.toLocaleString('en-IN', options);
        };

        const now = new Date();
        const formattedDate = formatDate(now);

        const newEntry = {
            name,
            score,
            category, 
            time: formattedDate 
        };

        data.push(newEntry);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        console.log('Updated data:', data);

        return new Response(JSON.stringify({ message: 'Score saved successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error saving score:', error.message);
        return new Response(JSON.stringify({ error: error.message || 'Failed to save score' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function GET() {
    console.log('GET request received');
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
    });
}
