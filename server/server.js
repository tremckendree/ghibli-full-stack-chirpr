import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes/index';


const app = express();

let p = path.join(__dirname, '../public');
console.log(p);

app.use(express.json());
app.use(express.static(p));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

// dbRouter.get('/api/chirps', (req, res) => {
// try {
// res.json(await db.chirps.all());
// } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
// }
// })