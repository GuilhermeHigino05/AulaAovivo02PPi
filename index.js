import express from 'express';

const host = "0.0.0.0";
const port = 3000;
const sever = express();

sever.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});