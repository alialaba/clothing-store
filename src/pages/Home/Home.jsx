import React from "react";
import { CountDownCard } from "../../components/CountDownCard";
import { ReviewCard } from "../../components/ReviewCard";


export const Home =(props)=>{
    // console.log(props.rev)
    return(
        <>

        <section>
           <div className="container">
           <CountDownCard/>
           </div>
        </section>

        <section>
            <div className="container">
               <div className="review">
               <h2>Reviews</h2>
               <p>Hear what our customers say about us</p>
                  {
                    props.reviews.map((item, index)=>(
                        <ReviewCard key={index} item={item} />
                    ))
                  }
               </div>
            </div>
        </section>
           
        </>
    )
}