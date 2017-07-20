/**
 * Cart Service
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ApiService} from "./api.service"; // importing my ApiService to access my API_ENDPOINT eg : ApiService.API_ENDPOINT

//Create a injectable service
@Injectable()

//Export class cart services
export class CartService {
    constructor(private http: Http) {}

    //Add to cart
    public addToCart(cart) {
        
        return this.http.post(ApiService.API_ENDPOINT + "/cart/", cart)
            .map((response: Response) => response.json());
    }


    //Show cart // user session not handled
    public showCart(user_id:number){
        return this.http.get(ApiService.API_ENDPOINT + "/cart/" + user_id)
            .map((response: Response) => response.json());

    }
}