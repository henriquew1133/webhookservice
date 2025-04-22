const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Substitua pelo seu webhook real
const YOUR_WEBHOOK_URL = 'https://discord.com/api/webhooks/1363554237862383626/cIeshkS0Sbw4TCr_eA3jnwDZjDfXzg8115MPEZMB0RWRhmPZzQi9-zk-m5U3rGJq9wkY'; 

// Rota do proxy
app.post('/webhook', async (req, res) => {
    try {
        const response = await axios.post(YOUR_WEBHOOK_URL, req.body);
        res.status(200).send('Webhook enviado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao enviar o webhook!');
    }
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
