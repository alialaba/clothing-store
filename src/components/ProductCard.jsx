import React from "react";
import { Button } from "./Button";

export const ProductCard =(props)=>{
    return(
        <article className="products__card">
            <div className="products__img">
                <img src={props.item.img}/>
            </div>
            <div className="products__content stack">
                <div className="products__content--upper">
                   <p className="products__name">{props.item.name}</p>
                   <span className="products__rating">{props.item.rating} *</span>
                </div>

                <div className="products__content--lower">  
                <span className="products__actual-price">{props.item.actualPrice}</span>
                    <span className="products__discount-price">{props.item.discountPrice}</span>

                    
                </div>

                <Button className="btn-br" text="Add to cart"/>
            </div>
            
        </article>
    )
}