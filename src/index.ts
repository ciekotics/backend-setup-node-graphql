import { createApp } from './createApp';

const app = createApp();
const PORT = 3000;

// app.get("/api/users", (req: Request, res: Response, next: NextFunction) => {
//     res.send([])
// })

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
})
