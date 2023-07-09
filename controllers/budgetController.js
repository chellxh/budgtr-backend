const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let budgetData = require("../models/dataModel");

router.get("/", (req, res) => {
  res.json(budgetData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundItem = budgetData.find((item) => item.id === id);

  if (!foundItem) {
    res.status(404).json({
      status: false,
      message:
        "Id cannot be found. Please check the id and try again or enter a new id.",
    });
  } else {
    res.json({ status: true, data: foundItem });
  }
});

router.post("/", (req, res) => {
  //   res.send("Testing");
  const entry = req.body;

  console.log(req.body);
  if (!entry) {
    res.status(400).json({
      status: false,
      message: "You cannot create an empty entry. Please enter an entry.",
    });
  } else {
    const newEntry = {
      id: uuidv4(),
      ...entry,
    };
    budgetData.push(newEntry);
    res.status(201).json({ status: true, data: budgetData });
  }
});

router.delete("/:id", (req, res) => {
  //   res.send("Testing");
  const { id } = req.params;
  //   console.log(req.params);

  let entryIndex = budgetData.findIndex((item) => item.id === id);

  if (entryIndex === -1) {
    res.status(404).json({
      status: false,
      message: "Sorry, no entry with that id was found",
    });
  } else {
    let foundEntry = budgetData[entryIndex];
    let newBudgetData = budgetData.filter((item) => item.id !== id);
    budgetData = newBudgetData;

    res.json({
      status: true,
      message: "Delete Successful",
      data: newBudgetData,
    });
  }
});

router.put("/:id", (req, res) => {
  //   res.send("Test");
  const { id } = req.params;

  // console.log(req.body);

  let entryIndex = budgetData.findIndex((item) => item.id === id);

  if (entryIndex === -1) {
    res.status(404).json({
      status: false,
      message: "Sorry, no entry with that id was found",
    });
  } else {
    let foundEntry = budgetData[entryIndex];
    let entryEdit = {
      ...foundEntry,
      ...req.body,
    };
    budgetData.splice(entryIndex, 1, entryEdit);
    res.json({ status: true, message: "Edit Successful", data: entryEdit });
  }
});

module.exports = router;
