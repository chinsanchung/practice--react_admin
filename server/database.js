import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = "mongodb://localhost:27017/golmok";
// const URL =
//   "mongodb+srv://moon:mmmm1259@wesavercluster-w2rvc.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set("useFindAndModify", false);
mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () =>
  console.log(`데이터베이스 연결: ${process.env.MONGO_URL}`);
const handleError = (error) => console.log(`데이터베이스 연결 에러: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
