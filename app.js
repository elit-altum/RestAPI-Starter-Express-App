require("dotenv").config({
	path: "config.env",
});
// Import your middlewares and create database connections here
const express = require("express");

const app = express();
module.exports = app;
