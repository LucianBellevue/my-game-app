import express, { json } from 'express';
import { post } from 'axios';

const app = express();
app.use(json());

app.post('/api/your-backend-route', async (req, res) => {
  const { input } = req.body;

  try {
    const response = await post('https://api.openai.com/v1/your-gpt-api-endpoint', {
      input: input,
      // Additional parameters or headers as required by the GPT API
    }, {
      headers: {
        'Authorization': 'Bearer your-gpt-api-key',
        'Content-Type': 'application/json',
      },
    });

    const output = response.data.output;

    res.json({ output });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3001, () => {
  console.log('Backend server is running on http://localhost:3001');
});
