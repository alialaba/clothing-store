import React from "react";

export const ReviewCard = (props)=>{
    console.log(props.item)
    return(
           <article>
            <h4>{props.item.name}</h4>
            <p>{props.item.comments}</p>
            
           </article>
    )
}