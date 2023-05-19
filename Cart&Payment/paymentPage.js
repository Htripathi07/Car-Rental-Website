let data =JSON.parse(localStorage.getItem("PaymentDetails"));


const cartPRoductDetails=(data) => {
    let productDivBody=document.getElementById("productDivBody");
    // productDivBody.innerHTML="";
    data.map((elem,idx)=> {
        let tr=document.createElement("tr");


        let tdImage=document.createEleme nt("td");
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
        let button=document.createElement("button");
        button.innerText="❌";
        button.addEventListener("click",() => {
            event.target.parentNode.remove();
            data.splice(idx,1);
            localStorage.setItem("cart",data);
           
          });
        tdRemove.innerText="❌";
        tdRemove.addEventListener("click",() => {
            event.target.parentNode.remove();
            data.splice(idx,1);
            localStorage.setItem("cart",data);
            console.log(data);
            cartPRoductDetails(data);
           
          });

        tr.append(tdImage,tdProduct,tdPrice,tdQuantity,tdSubTotal,tdRemove); 
        productDivBody.append(tr);
        cartSubTotal();

    });
}
cartPRoductDetails(data);

function cartSubTotal(){
    let row=document.getElementById("cartTotal");
    let toPay,subtotal,total;
    data.map((elem)=>{
        subtotal=elem.price*elem.quantity;
    })
    total=(subtotal/5)+subtotal;
    toPay=total;

    let tr1=document.createElement("tr");

    let th1=document.createElement("th");
    th1.innerText="SUBTOTAL";

    let td1=document.createElement("th");
    td1.innerText=subtotal;

    tr1.append(th1,td1);

    let tr2=document.createElement("tr");

    let th2=document.createElement("th");
    th2.innerText="TOTAL";

    let td2=document.createElement("th");
    td2.innerText=total;

    tr2.append(th2,td2);

    let tr3=document.createElement("tr");

    let th3=document.createElement("th");
    th3.innerText="TO PAY";

    let td3=document.createElement("th");
    td3.innerText=toPay;

    tr3.append(th3,td3);

    row.append(tr1,tr2,tr3);

    let obj={
        total : total,
        subtotal:subtotal,
        toPay:toPay
    }
    localStorage.setItem("PaymentDetails",JSON.stringify(obj));

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


console.log(PaymentDetails);