import dotenv from "dotenv";
import app from "./server/app";
import "./server/model/Shops";
import "./server/model/Members";
import "./server/model/Events";
import "./server/model/Announces";
import "./server/database";

dotenv.config();

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
