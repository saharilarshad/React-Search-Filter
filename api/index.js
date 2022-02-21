import express from "express";
const app = express();
import cors from "cors";
import { Users } from "./users.js";

app.use(cors());

app.get("/", (req, res) => {
  // console.log("hello")
  const { q } = req.query;
  // console.log(q);

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  q ? res.json(search(Users).slice(0, 10)) : res.json((Users).slice(0, 10));
});

app.listen(5000, () => console.log("API Up"));
