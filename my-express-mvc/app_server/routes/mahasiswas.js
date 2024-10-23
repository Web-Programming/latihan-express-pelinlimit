const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

router.get("/mahasiswa", mahasiswaController.Index);
router.post("/mahasiswa/insert", mahasiswaController.insert);
module.exports = router;