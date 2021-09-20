import React from 'react'

// function TestSub(props){
//     console.log(props)
//     return(
//         <div className="contact-card">
//             <img src={props.contact.imgUrl}/>
//             <h3>{props.contact.name}</h3>
//             <p>Phone: {props.contact.phone}</p>
//             <p>Email: {props.contact.email}</p>
//         </div>
//     )
// }


function ProductIem(props){
    return(
        <div>
            <p>The ID is {props.product.id}</p>
            <p>The name is {props.product.name}</p>
            <p>The price is {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <p>The description is {props.product.description}</p>
            <br></br>
            <hr></hr>
        </div>
    )
}
export default ProductIem