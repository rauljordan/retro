import React from 'react';
import Helmet from 'react-helmet';
import routes from './routes';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import 'isomorphic-fetch';

export default (req, res) => {
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message);
		} else if(redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if(renderProps) {
			if (process.env.NODE_ENV == 'development') {
				res.status(200).send(`
					<!doctype html>
					<html>
						<header>
							<title>Retro</title>
							<meta charset="utf-8">
					    <meta name="viewport" content="width=device-width, initial-scale=1">
							<link href="/public/style.css" rel="stylesheet"/>
						</header>
						<body>
							<div id="app"></div>
							<script src="/public/bundle.js"></script>
						</body>
					</html>
				`);
			}
      else if (process.env.NODE_ENV == 'production') {

				const component = (
					<RouterContext {...renderProps} />
				);
				const content = ReactDOMServer.renderToString(component);

				res.status(200).send(`
					<!doctype html>
					<html>
						<header>
							<title>Retro</title>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width, initial-scale=1">
							<link href="/public/style.css" rel="stylesheet"/>
						</header>
						<body>
							<div id="app">${content}</div>
							<script src="/public/bundle.js"></script>
						</body>
					</html>
				`);
				res.end();
			}
		}
		else {
			res.status(404).send('Not Found');
		}
	});
};
