import "./server/model/Shops";
import dotenv from "dotenv";
import app from "./server/app";
import "./server/database";

dotenv.config();

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
