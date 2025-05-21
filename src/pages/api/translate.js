export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método no permitido' });
    }

    const apiKey = process.env.MAGIC_LOOP_KEY;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Prompt requerido' });
    }

    const response = await fetch(`https://magicloops.dev/api/loop/${apiKey}/run`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })  // 👈 Aquí el formato correcto
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error del servidor' }); // 👈 Agrega una respuesta si hay error
  }
}
