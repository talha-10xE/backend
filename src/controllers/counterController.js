const Counter = require("../models/Counter");

// Fetch counter data
exports.getCounter = async (req, res) => {
  try {
    const counter = await Counter.findOne();
    if (!counter) return res.status(404).json({ message: "Counter not found" });
    res.json(counter);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update vote
exports.addVote = async (req, res) => {
  try {
    const { pet } = req.body; // "cat" or "dog"
    const counter = await Counter.findOne();

    if (!counter) return res.status(404).json({ message: "Counter not found" });

    if (pet === "cat") {
      counter.cats_today += 1;
      counter.cats_lifetime += 1;
    } else if (pet === "dog") {
      counter.dogs_today += 1;
      counter.dogs_lifetime += 1;
    } else {
      return res.status(400).json({ message: "Invalid pet type" });
    }

    await counter.save();
    res.json(counter);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
