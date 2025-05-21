export default async function handler(req, res) {
    try {
        const apiKey = process.env.MAGIC_LOOP_KEY;
        const { prompt } = req.body;
        const response = await fetch(`https://magicloops.dev/api/loop/${apiKey}/run`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prompt)
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (e) {
        console.error(e)
    }


}
