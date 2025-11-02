import express from "express";
import cors from "cors";
import connectDatabase from "./database/database.js";
import RegisterRoutes from "./routes/RegisterRoutes.js";
import LoginRoutes from "./routes/LoginRoutes.js";
import BookroomRoutes from "./routes/BookroomRoutes.js";

const PORT = 5000;
const app = express();
const customMiddleware = (req, res, next) => {
  const now = new Date().toLocaleDateString();
  console.log(` Date : ${now} Method : ${req.method}  Url : ${req.url}`);
  next();
};

connectDatabase();
app.use(customMiddleware);
app.use(express.json());
app.use(cors());

//routes
app.use("/register", RegisterRoutes);
app.use("/login", LoginRoutes);
app.use("/bookroom", BookroomRoutes);

app.listen(PORT, () => {
  console.log("Server Started at port :", PORT);
});
