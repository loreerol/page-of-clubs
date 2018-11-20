import http from "http";
import express from "express";
// Express app setup
const app = express();
const server = http.createServer(app);
server.listen(1234);
server.on("listening", () => {
  console.log("Server is listening on port: 1234");
});

import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.querySelector("#root"));
