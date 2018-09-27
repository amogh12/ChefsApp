import {Request, Response, NextFunction} from "express";
import { BasicController } from "../controllers/basicController";

export class BasicRoutes { 
    
    public basicController: BasicController = new BasicController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Contact 
        app.route('/contact')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
                res.status(401).send('You shall not pass!');
            } else {
                next();
            }                        
        }, this.basicController.getContacts)        

        // POST endpoint
        .post(this.basicController.addNewContact);

        // Contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get(this.basicController.getContactWithID)
        .put(this.basicController.updateContact)
        .delete(this.basicController.deleteContact)

    }
}