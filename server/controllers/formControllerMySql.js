const pool = require("../models/formModelConfigMySql");

const createFormMySql = async (req, res) => {
  try {
    const { fullName, emailId, phoneNumber, query } = req.body;

    if (!fullName || !emailId || !phoneNumber || !query) {
      return res.status(400).json({
        status: 1,
        msg: "fullName,emailId,phoneNumber,query fields are required",
      });
    }

    const connect = await pool.getConnection();

    const [saveData] = await connect.execute(
      `INSERT INTO formdata (name,email,phone,query) VALUES ('${fullName}','${emailId}',${phoneNumber},'${query}')`
    );

    connect.release();

    if (!saveData) {
      return res.status(400).json({
        status: 0,
        msg: "Data could not saved!!",
      });
    }
    return res.status(201).json({
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

module.exports = { createFormMySql };
