const { Router } = require("express");
const getCharacterById = require("../controllers/getCharacterById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = Router();

router.get("/character/:id", getCharacterById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);