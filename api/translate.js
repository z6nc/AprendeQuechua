export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const apiKey = process.env.MAGIC_LOOP_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'API Key no configurada' });
    }

    const { trimmedText } = req.body;

    if (!trimmedText || trimmedText.trim().length === 0) {
      return res.status(400).json({ error: 'Texto vacío o inválido' });
    }

    const response = await fetch(`https://magicloops.dev/api/loop/${apiKey}/run`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input : trimmedText })
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error al llamar a Magic Loop' });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error en API:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
