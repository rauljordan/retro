import path from 'path';
import express from 'express';
import webpack from 'webpack';
import ssr from './src/ssr';

const app = express();

if (process.env.NODE_ENV === 'development') {
	const config = require('./webpack.config.dev');
	const compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	app.use(require('webpack-hot-middleware')(compiler));
	app.use(express.static(path.resolve(__dirname, 'src')));
}

app.get('*', ssr);

app.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
	if (err) {
		console.error(err);
	} else {
		console.info('Listening at http://localhost:3000');
	}
});
