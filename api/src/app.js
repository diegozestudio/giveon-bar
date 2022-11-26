import express from "express";
import Routes from "./routes/index.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to GiveonAPI" });
});

app.use("/api/categories", Routes);

export default app;
