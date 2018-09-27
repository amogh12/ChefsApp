import * as express from "express";
import * as bodyParser from "body-parser";
import { BasicRoutes } from "./routes/basicRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: BasicRoutes = new BasicRoutes();
    public mongoUrl: string = 'mongodb://localhost:27017/chefsdb';

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);        
    }

}

export default new App().app;