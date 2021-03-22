import express from 'express';
import { createServer } from 'http';

const PORT = 5000;

const app = express();

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})




