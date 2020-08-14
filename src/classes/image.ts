import * as dotenv from "dotenv";
import Unsplash, { toJson } from "unsplash-js";

export class Image {

    private unsplash = new Unsplash({
        accessKey: process.env.UNSPLASH_ACCESS_KEY
    });

    private CollectionId = Number(process.env.UNSPLASH_COLECTION_ID);

    getImage() : string {
        // this.unsplash.photos.getRandomPhoto({ username: "huper" })
        // .then(toJson)
        // .then(json => {
        //     console.log(json)
        // });

        // this.unsplash.users.collections('rodkammer')
        // .then(toJson)
        // .then(json => {
        //     console.log(json)
        // });

        this.unsplash.collections.getCollectionPhotos(this.CollectionId)
        .then(toJson)
        .then((data) => {
            let pic = data[Math.floor(Math.random() * data.length)]
            console.log(pic.urls.regular);
        });

        return "";
    }

}