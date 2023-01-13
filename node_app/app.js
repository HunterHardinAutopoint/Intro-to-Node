//Stock Market app

import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const otherstuff = "hello there, this is the other stuff!";

app.get('/', (req, res) => {
    res.render('home', {
		stuff: otherstuff
	});
});

app.listen(3000);