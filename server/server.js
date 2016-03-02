import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3001, 'localhost', (err) => {
  (err) => {
    console.error(err);
    return;
  }
  console.log('Listening at http://localhost:3001');
});