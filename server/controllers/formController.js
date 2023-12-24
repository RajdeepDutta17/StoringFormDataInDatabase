const FormData = require("../models/formModel");

// Saving new query
const createForm = async (req, res) => {
  try {
    const { fullName, emailId, phoneNumber, query } = req.body;

    if (!fullName || !emailId || !phoneNumber || !query) {
      return res.status(400).json({
        status: 0,
        msg: "fullName, emailId, phoneNumber and query fields cannot be empty!!",
      });
    }

    const saveData = await FormData.create({
      name: fullName,
      email: emailId,
      phone: phoneNumber,
      query: query,
    });

    if (!saveData) {
      return res.status(400).json({
        status: 0,
        msg: "Could not save the data!!",
      });
    }
    res.status(201).json({
      status: 1,
      msg: "Data saved successfully!!",
      data: saveData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      msg: "Server Error!!",
    });
  }
};

module.exports = { createForm };
