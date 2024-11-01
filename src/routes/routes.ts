import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.post("/create", (req, res) => {
    res.send("Hello World");
});

router.get("/:id", (req, res) => {
    res.send("Hello World from id");
});


export default router;