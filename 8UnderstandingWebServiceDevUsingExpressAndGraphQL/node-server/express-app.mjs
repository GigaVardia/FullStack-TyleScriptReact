import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log("First middleware!");
    next();
})

// app.use((req, res, next) => {
//     res.send("Hello world. I am custom middleware!")
// })

app.use(router);

router.get("/api/v1/users", (req, res, next) => {
    const users = [
        {
            id: 1,
            username: "Tom"
        },
        {
            id: 2,
            username: "John"
        },
        {
            id: 3,
            username: "Linda"
        }
    ]

    console.log(req.query.userid);
    const user = users.find((usr) => usr.id == req.query.userid)
    res.send(`User ${user?.username}`)
})

router.post("/api/v1/groups", (req, res, next) => {
    const groups = [
        {
            id: 1,
            groupname: "Admins"
        },
        {
            id: 2,
            groupname: "Users"
        },
        {
            id: 3,
            groupname: "Employees"
        },
    ]

    const group = groups.find(group => group.id == req.body.groupid);
    res.send(`Group ${group.groupname}`)
})

router.get("/a", (req,res,next) => {
    res.send("Hello, this is route a!")
})

router.post("/c", (req,res, next) => {
    res.send(`Hello this is route c. Message is ${req.body.message}`)
})

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

app.listen({port: 8000}, () => {
    console.log("Express Node server has loaded!")
})