import express from "express";
import "dotenv/config";
import db from "./src/config/configDb.js";

const app = express();
app.use(express.json());

(async () => {
  try {
    await db.authenticate();
    console.log("DB connected!");
  } catch (error) {
    console.error("DB connection error:", error.message || error);
  }
})();

app.get("/", (req, res) => {
  res.send("Ready");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(3001, () => {
    console.log("Server running on port 3001!");
  });
}

export default app;