import express from "express";
import config from "./config/config";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

(async () => {
    app.listen(config.port, () => {
        console.log(`Server is runnin on port ${config.port}`);
    });
})();