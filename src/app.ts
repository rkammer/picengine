import * as dotenv from "dotenv";
import {PicGenerator} from "./classes/picgenerator"

dotenv.config();

let p : PicGenerator  = new PicGenerator();
p.generate().then((name) => {
    console.log(`${name} generated`)
});