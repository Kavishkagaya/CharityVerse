// Import required modules
const express = require("express");
const mysql = require("mysql");
const multer = require("multer");

// Create Express application
const app = express();

// Configure MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "charityverse_db",
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

// Configure middleware
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// User registration endpoint
app.post("/api/users/register", (req, res) => {
  const { name, email, password, role } = req.body;

  // Insert user into the database
  const sql =
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, password, role], (err, result) => {
    if (err) {
      console.error("Failed to register user:", err);
      res.status(500).json({ error: "Failed to register user" });
      return;
    }
    res.json({ message: "User registered successfully" });
  });
});

// User login endpoint
app.post("/api/users/login", (req, res) => {
  const { username, password } = req.body;

  // Fetch user from the database
  const sql = "SELECT * FROM users WHERE uname = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("Failed to fetch user:", err);
      res.status(500).json({ error: "Failed to fetch user" });
      return;
    }
    if (result.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const user = result[0];
    res.json({ message: "User logged in successfully", user });
  });
});

// Create a charity post endpoint
app.post("/api/posts", (req, res) => {
  const { user_id, title, description, category } = req.body;

  // Insert post into the database
  const sql =
    "INSERT INTO posts (user_id, title, description, category) VALUES (?, ?, ?, ?)";
  db.query(sql, [user_id, title, description, category], (err, result) => {
    if (err) {
      console.error("Failed to create post:", err);
      res.status(500).json({ error: "Failed to create post" });
      return;
    }
    res.json({ message: "Post created successfully" });
  });
});

// Get all charity posts endpoint
app.get("/api/posts", (req, res) => {
  // Fetch all posts from the database
  const sql = "SELECT * FROM posts";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Failed to fetch posts:", err);
      res.status(500).json({ error: "Failed to fetch posts" });
      return;
    }
    res.json({ posts: result });
  });
});

// Update the multer configuration to accept multiple files
const upload = multer({ dest: "uploads/img/" }).array("files");

// Modify the file upload route to handle multiple files
app.post("/upload-img", upload, (req, res) => {
  console.log(req.files); // Information about the uploaded files
  res.send("Files uploaded successfully!");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
