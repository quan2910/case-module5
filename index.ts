import express from 'express';
import {router} from "./src/router/router";
import fileUpload from 'express-fileupload';
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use("", router);
const PORT = 3000
app.listen(PORT, () => {
    console.log("Server is running !!")
})


