import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import WebpackDevMiddleware from "webpack-dev-middleware";
import config from "../webpack.config";
import webpack from "webpack";
import routes from "./routes";
import shopRouter from "./router/shopRouter";

const app = express();
const compiler = webpack(config);
const router = express.Router();

app.use(
  WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(routes.shops, shopRouter);

export default app;
