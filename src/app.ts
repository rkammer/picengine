import * as dotenv from "dotenv";
import {PicGenerator} from "./classes/picgenerator"
import {Image} from "./classes/image"

global.fetch = require("node-fetch");
dotenv.config();

let p : PicGenerator  = new PicGenerator();
p.generate().then((name) => {
    console.log(`${name} generated`)
});

// let i = new Image();
// i.getImage();
