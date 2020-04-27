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
import memberRouter from "./router/memberRouter";
import eventRouter from "./router/eventRouter";
import announceRouter from "./router/announceRouter";

const app = express();
const compiler = webpack(config);

app.use(
  WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

app.use(routes.shops, shopRouter);
app.use(routes.members, memberRouter);
app.use(routes.events, eventRouter);
app.use(routes.announces, announceRouter);

export default app;
