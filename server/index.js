import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import router from './routes/posts.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: 'true'}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: 'true'}));

app.use(cors());

app.use('/posts', router);

app.get('/', (req, res) => {
    res.send('Greetings from memories API');
});

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(_=> app.listen(PORT, _=> console.log(`Server running on port ${PORT}`)))
    .catch(err => console.error(err.message));

mongoose.set('useFindAndModify', false);