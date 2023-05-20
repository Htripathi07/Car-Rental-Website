let data=JSON.parse(localStorage.getItem("")) || [];
let PaymentDetails=JSON.parse(localStorage.getItem("PaymentDetails")) || [];

const cartPRoductDetails=(data) => {
    let productDivBody=document.getElementById("productDivBody");
    productDivBody.innerHTML="";
    data.map((elem,idx)=> {
      let tr=document.createElement("tr");
    
    
      let tdImage=document.createElement("td");
      let img=document.createElement("img");
      img.src=elem.image;
      tdImage.append(img);
    
    
      let tdProduct=document.createElement("td");
      tdProduct.innerText=elem.description;
    
      let tdPrice=document.createElement("td");
      tdPrice.innerText=elem.price;
    
      let tdQuantity=document.createElement("td");
      tdQuantity.innerText=elem.quantity;
    
      let tdSubTotal=document.createElement("td");
      tdSubTotal.innerText=elem.price*elem.quantity;
            // let tdRemove=document.createElement("td");
            // // let button=document.createElement("button");
            // // button.innerText="❌";
            // // button.addEventListener("click",() => {
            // //     event.target.parentNode.remove();
            // //     data.splice(idx,1);
            // //     localStorage.setItem("cart",data);
            
            // //   });
            // tdRemove.innerText="❌";
            // tdRemove.addEventListener("click",() => {
            //     event.target.parentNode.remove();
            //     data.splice(idx,1);
            //     localStorage.setItem("cart",data);
            //     console.log(data);
            //     cartPRoductDetails(data);
            //     cartSubTotal(data);
            
            // });

            tr.append(tdImage,tdProduct,tdPrice,tdQuantity,tdSubTotal); 
            productDivBody.append(tr);
            

        });
};

cartPRoductDetails(data);
// discount:discount,
//       total : total,
//       subtotal : subtotal,
//       tax:tax

const cartSubTotal=(data)=>{
    console.log(data);
    
    // let div=document.getElementById("cartTotals");
    // div.innerHTML="";
    
    let toPay=data.total,subtotal=data.subtotal,total=data.total,tax=data.tax ,discount=data.discount;
    // data.forEach(elem => {
    //   subtotal+=elem.price*elem.quantity;
    // });
    // data.map((elem)=>{
    
    //   subtotal+=elem.price*elem.quantity;
    // })
    // console.log(subtotal);
    // tax=subtotal/5;
    // total=tax+subtotal;
    // toPay=total;
    // console.log(subtotal,total,toPay,tax);
    
    
    document.getElementById("subTotal").innerText=subtotal;
    document.getElementById("discount").innerText=discount;
    document.getElementById("tax").innerText=tax;
    document.getElementById("total").innerText=total;
    document.getElementById("toPay").innerText=toPay;
    
    let butt =document.getElementById("buttonPayment");
    butt.innerText="PROCEED TO CHECKOUT";
    butt.addEventListener("click",() => {
      fun();
    });
    }
    cartSubTotal(PaymentDetails);


    function fun(){
        let name=document.getElementById("name").value;
        let country=document.getElementById("countries").value;
        console.log(country);
        let address=document.getElementById("address").value;
        let phone=document.getElementById("phone").value;
        let email=document.getElementById("email").value;

        if(name != "" || country != "Select" || address!="" || phone != "" || email!=""){
            localStorage.setItem("finalPrice",PaymentDetails.total);
            window.location.href="rough.html";
        }else{
            alert("WARNING !! PLEASE FILL ALL THE DETAILS")
        }
    }