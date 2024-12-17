import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Blog")
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("DB error🕸️" + err);
    });
}
