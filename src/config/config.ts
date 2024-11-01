import dotenv from "dotenv";
import Config from "../interface/config";
dotenv.config();

const config: Config = {
    port: process.env.PORT || 3000
}

export default config;  