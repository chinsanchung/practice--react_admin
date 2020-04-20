import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "./webpack.config";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const complier = webpack(config);

app.use(helmet());
app.use(
  webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath,
  }),
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.listen(4000, (req, res) => console.log("Server Started"));
