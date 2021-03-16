import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("hello, world")
    } else if (req.url === "/a") {
        res.end("Welcome to route a")
    } else if (req.url === "/b") {
        res.end("Welcome to route b")
    } else if (req.url === "/c" && req.method === "POST") {
        let body = [];
        req.on("data", chunk => {
            body.push(chunk)
        });
        req.on("end", () => {
            const params = Buffer.concat(body);
            console.log("body", params.toLocaleString());
            res.end(`You submitted these parameters: ${params.toString()}`)
        })
    } else {
        res.end("goodbye")
    }
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log("Server started or port ", PORT)
})