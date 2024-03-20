import server from './server';

// const app = server();
const PORT = 3000;

// app.get("/api/users", (req: Request, res: Response, next: NextFunction) => {
//     res.send([])
// })

server.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
})
