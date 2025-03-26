// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb+srv://thanishmamilla:thanish123@cluster0.1x0tmmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true });

// const UserSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     likedSongs: [
//       {
//         id: String,
//         title: String,
//         artist: String,
//         image: String,
//         url: String
//       }
//     ]
//   });
  

// const User = mongoose.model("User", UserSchema);

// const SECRET_KEY = "your_secret_key"; // Change this

// // Signup
// app.post("/signup", async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = new User({ username, password: hashedPassword, likedSongs: [] });
//   await user.save();
//   res.json({ message: "User created" });
// });

// // Login
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }
//   const token = jwt.sign({ userId: user._id }, SECRET_KEY);
//   res.json({ token });
// });

// //

// app.post("/like", async (req, res) => {
//     const { token, songId, title, artist, image, url } = req.body;
//     try {
//       const { userId } = jwt.verify(token, SECRET_KEY);
//       const user = await User.findById(userId);
  
//       const existingSong = user.likedSongs.find((song) => song.id === songId);
//       if (existingSong) {
//         user.likedSongs = user.likedSongs.filter((song) => song.id !== songId);
//       } else {
//         user.likedSongs.push({ id: songId, title, artist, image, url });
//       }
  
//       await user.save();
//       res.json({ likedSongs: user.likedSongs });
//     } catch {
//       res.status(401).json({ message: "Invalid token" });
//     }
//   });
  

// // Get liked songs
// app.get("/liked-songs", async (req, res) => {
//     const token = req.headers.authorization;
//     try {
//       const { userId } = jwt.verify(token, SECRET_KEY);
//       const user = await User.findById(userId);
//       res.json({ likedSongs: user.likedSongs });
//     } catch {
//       res.status(401).json({ message: "Invalid token" });
//     }
//   });
  

// app.listen(5000, () => console.log("Server running on port 5000"));




// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect(
//   "mongodb+srv://thanishmamilla:thanish123@cluster0.1x0tmmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//   { useNewUrlParser: true }
// );

// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   likedSongs: [
//     {
//       id: String,
//       title: String,
//       artist: String,
//       image: String,
//       url: String,
//     },
//   ],
// });

// const User = mongoose.model("User", UserSchema);

// const SECRET_KEY = "your_secret_key"; // Change this

// // Signup
// app.post("/signup", async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = new User({ username, password: hashedPassword, likedSongs: [] });
//   await user.save();
//   res.json({ message: "User created" });
// });

// // Login
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }
//   const token = jwt.sign({ userId: user._id }, SECRET_KEY);
//   res.json({ token });
// });

// // Like or Unlike a Song
// app.post("/like", async (req, res) => {
//   const { token, songId, title, artist, image, url } = req.body;
//   try {
//     const { userId } = jwt.verify(token, SECRET_KEY);
//     const user = await User.findById(userId);

//     const existingSong = user.likedSongs.find((song) => song.id === songId);
//     if (existingSong) {
//       user.likedSongs = user.likedSongs.filter((song) => song.id !== songId);
//     } else {
//       user.likedSongs.push({ id: songId, title, artist, image, url });
//     }

//     await user.save();
//     res.json({ likedSongs: user.likedSongs });
//   } catch {
//     res.status(401).json({ message: "Invalid token" });
//   }
// });

// // ✅ New Route to Delete a Song from Liked List
// app.post("/delete-song", async (req, res) => {
//   const { token, songId } = req.body;
//   try {
//     const { userId } = jwt.verify(token, SECRET_KEY);
//     const user = await User.findById(userId);

//     user.likedSongs = user.likedSongs.filter((song) => song.id !== songId);
//     await user.save();
    
//     res.json({ likedSongs: user.likedSongs });
//   } catch {
//     res.status(401).json({ message: "Invalid token" });
//   }
// });

// // Get liked songs
// app.get("/liked-songs", async (req, res) => {
//   const token = req.headers.authorization;
//   try {
//     const { userId } = jwt.verify(token, SECRET_KEY);
//     const user = await User.findById(userId);
//     res.json({ likedSongs: user.likedSongs });
//   } catch {
//     res.status(401).json({ message: "Invalid token" });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));



const path = require("path");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://thanishmamilla:thanish123@cluster0.1x0tmmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true }
);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  likedSongs: [
    {
      id: String,
      title: String,
      artist: String,
      image: String,
      url: String,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

const SECRET_KEY = "your_secret_key"; // Change this

// Serve React build folder
// app.use(express.static(path.join(__dirname, "build")));

// API Routes
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, likedSongs: [] });
  await user.save();
  res.json({ message: "User created" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: user._id }, SECRET_KEY);
  res.json({ token });
});

// Like/Unlike Song
app.post("/like", async (req, res) => {
  const { token, songId, title, artist, image, url } = req.body;
  try {
    const { userId } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(userId);

    const existingSong = user.likedSongs.find((song) => song.id === songId);
    if (existingSong) {
      user.likedSongs = user.likedSongs.filter((song) => song.id !== songId);
    } else {
      user.likedSongs.push({ id: songId, title, artist, image, url });
    }

    await user.save();
    res.json({ likedSongs: user.likedSongs });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

// Delete a Song
app.post("/delete-song", async (req, res) => {
  const { token, songId } = req.body;
  try {
    const { userId } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(userId);

    user.likedSongs = user.likedSongs.filter((song) => song.id !== songId);
    await user.save();

    res.json({ likedSongs: user.likedSongs });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

// Get Liked Songs
app.get("/liked-songs", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { userId } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(userId);
    res.json({ likedSongs: user.likedSongs });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

// Handle React Routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
