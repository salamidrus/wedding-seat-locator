const { Router } = require("express")
const router = Router();

router.get('/', (req, res, next) => {
    res.json("Welcome To Wedding Seat Organizer");
});

module.exports = router;