import express from "express";
import { createUrl, getUrl } from "../controller/url_controller";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.post("/create", createUrl);

router.get("/:id", getUrl);


export default router;