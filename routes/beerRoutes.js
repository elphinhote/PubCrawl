const router = require("express").Router();

const { localBars, coordinateBars } = require("../controllers/BeerController");

router.put("/", localBars);
router.post("/coordinate", coordinateBars);

module.exports = router;
