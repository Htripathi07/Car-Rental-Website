let data=[
        {
         "id": 1,
         "name": "Toyota Camry",
         "rent": 50,
         "image": "https://example.com/images/toyota_camry.jpg",
         "description": "The Toyota Camry is a reliable and comfortable sedan with a spacious interior.",
         "engine": "2.5L Inline-4",
         "fuel": "Gasoline",
         "seatingCapacity": 5,
         "ratings": 4.5
       },
       {
         "id": 2,
         "name": "Honda Civic",
         "rent": 45,
         "image": "https://example.com/images/honda_civic.jpg",
         "description": "The Honda Civic is a popular compact car known for its fuel efficiency and sporty design.",
         "engine": "1.5L Turbocharged Inline-4",
         "fuel": "Gasoline",
         "seatingCapacity": 5,
         "ratings": 4.2
       },
       {
         "id": 3,
         "name": "Ford Mustang",
         "rent": 80,
         "image": "https://example.com/images/ford_mustang.jpg",
         "description": "The Ford Mustang is an iconic sports car that offers powerful performance and a stylish look.",
         "engine": "5.0L V8",
         "fuel": "Gasoline",
         "seatingCapacity": 4,
         "ratings": 4.8
       },
       {
         "id": 4,
         "name": "Chevrolet Cruze",
         "rent": 55,
         "image": "https://example.com/images/chevrolet_cruze.jpg",
         "description": "The Chevrolet Cruze is a compact sedan that provides a comfortable ride and modern features.",
         "engine": "1.4L Turbocharged Inline-4",
         "fuel": "Gasoline",
         "seatingCapacity": 5,
         "ratings": 4.0
       }
 ];

const cartPRoductDetails=(data) => {
    let productDivBody=document.getElementById("productDivBody");
    productDivBody.innerHTML="";
    data.map((elem,idx)=> {
        let tr=document.createElement("tr");


        let tdImage=document.createElement("td");
        let img=document.createElement("img");
        img.src="https://mwendoafrica.com/wp-content/uploads/2023/01/CARS-PNG-07.png";
        tdImage.append(img);


        let tdProduct=document.createElement("td");
        tdProduct.innerText=elem.description;

        let tdPrice=document.createElement("td");
        tdPrice.innerText=elem.price;

        let tdQuantity=document.createElement("td");
        tdQuantity.innerText="1";

        let tdSubTotal=document.createElement("td");
        tdSubTotal.innerText=elem.price*1;

        let tdRemove=document.createElement("td");
        // let button=document.createElement("button");
        // button.innerText="❌";
        // button.addEventListener("click",() => {
        //     event.target.parentNode.remove();
        //     data.splice(idx,1);
        //     localStorage.setItem("cart",data);
           
        //   });
        tdRemove.innerText="❌";
        tdRemove.addEventListener("click",() => {
            event.target.parentNode.remove();
            data.splice(idx,1);
            localStorage.setItem("cart",data);
            console.log(data);
            cartPRoductDetails(data);
            cartSubTotal(data);
           
          });

        tr.append(tdImage,tdProduct,tdPrice,tdQuantity,tdSubTotal,tdRemove); 
        productDivBody.append(tr);
        

    });
}

cartPRoductDetails(data);

const cartSubTotal=(data)=>{
    
    let div=document.getElementById("cartTotals");
    let toPay,subtotal,total;
    data.map((elem)=>{
        subtotal=elem.rent*1;
    })
    
    total=(subtotal/5)+subtotal;
    toPay=total;
    console.log(subtotal,total,toPay);

    document.getElementById("subTotal").innerText=`$${subtotal}`;
    document.getElementById("total").innerText=`$${total}`;
    document.getElementById("toPay").innerText=`$${toPay}`;
    
    let butt =document.getElementById("buttonPayment");
    butt.innerText="PROCEED TO CHECKOUT";
    butt.addEventListener("click",() => {
        // let subtotal=document.getElementById("subtotal").value;
        // let total=document.getElementById("total").value;
        // let toPay=document.getElementById("toPay").value;
        console.log(subtotal,total,toPay);
        let obj={
            total : total,
            subtotal : subtotal,
            toPay : toPay
        }
        console.log(obj);
        localStorage.setItem("PaymentDetails",JSON.stringify(obj));
        window.location.href="paymentPage.html";
    });
    
    
    

    



    // let cartTotalDiv=document.getElementById("cartTotalDiv");

    // let pcobutton=document.createElement("button");
    // button.innerText="PROCEED TO CHECKOUT";
    // button.addEventListener("click",() => {
    //     let obj={
    //         total : total,
    //         subtotal:subtotal,
    //         toPay:toPay
    //     }
    //     localStorage.setItem("PaymentDetails",obj);
    
    // })


}
cartSubTotal(data);


 
