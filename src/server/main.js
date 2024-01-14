// src/server/main.js
import express from "express";
import ViteExpress from "vite-express";
import path from "path";
import { fileURLToPath } from "url";

// easy access
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// use static files
app.use(express.static(path.join(__dirname, '../src/client/pages')));

//* Serve the main HTML file for all routes, 
//* and let the client-side routing take over:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// connection
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
