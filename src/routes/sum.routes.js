const { Router } = require("express");
const sumSchema = require("../schema/schemaSum");
const router = Router();

router.post("/sum", async (req, res) => {
  const numbers = req.query;
  if (numbers.num1 && numbers.num2) {
    const num1 = +numbers.num1;
    const num2 = +numbers.num2;
    const result = num1 + num2;

    try {
      const newSum = new sumSchema({
        num1,
        num2,
        result,
      });

      const responseBD = await newSum.save();
      res.status(201).json({
        code: 201,
        message: "Was created successfully",
        error: false,
        response: responseBD.result,
      });
    } catch (error) {
      res.status(500).json({
        code: 500,
        message: "There was an unexpected error",
        error: true,
        response: undefined,
      });
    }
  } else {
    return res.status(400).json({
      code: 400,
      message: "Parameters num1 and num2 are required",
      error: false,
      response: undefined,
    });
  }
});

module.exports = router;
