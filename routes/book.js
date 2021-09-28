const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/auth");
const Book = require("../models/Book");
router.post(
  "/book",
  [
    authMiddleware,
    [
      check("contact", "Contact number is required").not().isEmpty(),
      check("vehicleNo", "Vehicle Number is required").not().isEmpty(),
      check("vehicle", "Vehicle type is required").not().isEmpty(),
      check("arrivalTime", "Arrival Time is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array(),
      });
    } else {
      req.body.user = req.user;

      const book = await new Book(req.body);
      await book.save();
      return res.json({
        book,
      });
    }
  }
);

router.get("/yourparkings", authMiddleware, async (req, res) => {
  try {
    const parkings = await Book.find({ user: req.user });

    res.json({ parkings: parkings });
  } catch (error) {
    console.log(error.message);
    res.status(500).json("internal server error");
  }
});
router.get("/get-all-books/:id", async function (req, res) {
  const result = await Book.find({ locationId: req.params.id });
  res.json(result);
});
module.exports = router;
