// server.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/shorten', async (req, res) => {

console.log('Received request:', req.body);
  const { url } = req.body;


  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing URL' });
  }

  try {
    const response = await axios.post(
      'https://cleanuri.com/api/v1/shorten',
      new URLSearchParams({ url }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error('[API] Error from CleanURI:', err.response?.data || err.message);
    res.status(500).json({
      error: 'Error shortening URL',
      details: err.response?.data || err.message,
    });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
