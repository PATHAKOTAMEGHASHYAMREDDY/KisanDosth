const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors()); // Allows frontend to communicate with backend
app.use(express.json()); // Parses JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define a Message Schema
const messageSchema = new mongoose.Schema({
    message: String,
    encryptedMessage: String,
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

// Test Route
app.get("/", (req, res) => {
    res.send("Backend is running with MongoDB!");
});

// API to Encrypt and Store Message
app.post("/encrypt-message", async (req, res) => {
    const { message } = req.body;

    // Replace this with actual AES encryption logic
    const encryptedMessage = `encrypted_${message}`;

    try {
        const newMessage = new Message({ message, encryptedMessage });
        await newMessage.save();
        res.json({ encryptedMessage });
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API to Retrieve All Messages
app.get("/messages", async (req, res) => {
    try {
        const messages = await Message.find().sort({ timestamp: -1 });
        res.json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
