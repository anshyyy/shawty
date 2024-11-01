import express from "express";
import config from "./config/config";
import bodyParser from "body-parser";
import routes from "./routes/routes";
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", routes);

(async () => {
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
})();