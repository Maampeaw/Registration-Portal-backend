const { handleError } = require("../util/errors");
const Result = require("../models/Result");

// get all results
const getResults = async (req, res) => {
  try {
    const results = await Result.find()
      .select("-answers")
      .populate("application", "firstName lastName email dob address batch_slug university gpa");
    res.status(200).json({ results });
  } catch (error) {
    handleError(res, error, "Could not fetch results");
  }
};

module.exports = { getResults };
