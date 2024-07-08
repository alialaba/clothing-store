import React from "react";
import data from "../data.json";
const {footer} = data;

export const Footer =()=>{
    return(
        <footer>
            <div className="container">
                <div className="footer__row">
                   
                    {footer.columns.map((item, index)=>(
                        <div key={index}>
                            <h3>{item.title}</h3>
                            {item.links && (
                                <ul>
                                    {item.links.map((link, indx)=>(
                                        <li key={indx}> <a href={link.url}>{link.name}</a></li>
                                    ))}
                                </ul>
                            )}
                            {item.description && <p>{item.description}</p>}
                            {item.description && (
                                <form>
                                <input
                                  type="email"
                                  placeholder={item.subscribeForm.placeholder}
                                />
                                <button type="submit">{item.subscribeForm.buttonText}</button>
                              </form>
                            )}

                            {item.contactDetails  && (
                                <div>
                                    <p>{item.contactDetails.address}</p>
                                    <p>{item.contactDetails.phone}</p>
                                    <p>{item.contactDetails.email}</p>
                                </div>
                            )}
                        </div>


                    ))}
                </div>

            </div>
        </footer>
    );
}