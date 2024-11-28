const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());

// MongoDB Bağlantısı
const MONGO_URI = "mongodb://localhost:27017/mydatabase";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch((err) => console.error("MongoDB bağlantısı başarısız:", err));

// Mongoose Şema ve Model
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Item = mongoose.model("Item", ItemSchema);

// Rotalar
app.get("/", (req, res) => {
  res.send("Hoş geldiniz! API çalışıyor.");
});

app.post("/api/items", async (req, res) => {
  const { name } = req.body;
  try {
    const newItem = new Item({ name });
    await newItem.save();
    res.status(201).json({ message: "Veri eklendi", item: newItem });
  } catch (err) {
    res.status(500).json({ error: "Veri eklenirken hata oluştu" });
  }
});

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: "Veriler getirilirken hata oluştu" });
  }
});

// Sunucu
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
