let data=JSON.parse(localStorage.getItem("selectedCars")) || [];

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

  let tdRemove=document.createElement("td");
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
console.log(data);

let div=document.getElementById("cartTotals");
// div.innerHTML="";

let toPay=0,subtotal=0,total=0,tax=0;
// data.forEach(elem => {
//   subtotal+=elem.price*elem.quantity;
// });
data.map((elem)=>{

  subtotal+=elem.price*elem.quantity;
})
console.log(subtotal);
tax=subtotal/5;
total=tax+subtotal;
toPay=total;
console.log(subtotal,total,toPay,tax);


document.getElementById("subTotal").innerText=subtotal;
document.getElementById("tax").innerText=tax;
document.getElementById("total").innerText=total;
document.getElementById("toPay").innerText=toPay;

let butt =document.getElementById("buttonPayment");
butt.innerText="PROCEED TO CHECKOUT";
butt.addEventListener("click",() => {
  // let subtotal=document.getElementById("subtotal").value;
  // let total=document.getElementById("total").value;
  // let toPay=document.getElementById("toPay").value;
  fun();
  // console.log(subtotal,total,toPay);
  // let obj={
  //     total : total,
  //     subtotal : subtotal,
  //     toPay : toPay
  // }
  // console.log(obj);
  // localStorage.setItem("PaymentDetails",JSON.stringify(obj));
  // window.location.href="paymentPage.html";
});
}
cartSubTotal(data);

let timerId;

const debounce = (func, delay) => {
if (timerId) {
clearTimeout(timerId);
}

timerId = setTimeout(() => {
ValidApplyCoupon();
}, delay);
}

function ValidApplyCoupon(){
let coupon=document.getElementById("coupon").value;

if(coupon === "FIRST30"){
  alert("THANK YOU !! For choosing us for the 1st time.YOU GOT 30% DISCOUNT!!!");

  let st=document.getElementById("subTotal").innerText;
  console.log(st)
  let sub=st*1;
  let dp=(sub/100)*30;
  document.getElementById("discount").innerText=dp;
  let tax=(sub-dp)/5;
  document.getElementById("tax").innerText=tax;

  let total=(sub-dp)+tax;
  document.getElementById("total").innerText=total;

  document.getElementById("toPay").innerText=total;
  console.log(st,dp,tax,total);


}else if(coupon === "SECOND20"){
  alert("THANK YOU !! For choosing us for the 2nd time.YOU GOT 20% DISCOUNT!!!");
  
  let st=document.getElementById("subTotal").innerText;
  let sub=st*1;
  let dp=(sub/100)*20;
  document.getElementById("discount").innerText=dp;
  let tax=(sub-dp)/5;
  document.getElementById("tax").innerText=tax;

  let total=(sub-dp)+tax;
  document.getElementById("total").innerText=total;

  document.getElementById("toPay").innerText=total;




}else if(coupon === "THIRD10"){
  alert("THANK YOU !! For choosing us for the 3rd time.YOU GOT 10% DISCOUNT!!!");
  
  let st=document.getElementById("subTotal").innerText;
  let sub=st*1;
  let dp=(sub/100)*10;
  document.getElementById("discount").innerText=dp;
  let tax=(sub-dp)/5;
  document.getElementById("tax").innerText=tax;

  let total=(sub-dp)+tax;
  document.getElementById("total").innerText=total;

  document.getElementById("toPay").innerText=total;




}else{
alert("Wrong Coupon !!!")
}
}
function fun(){
  let subtotal=document.getElementById("subTotal").innerText;
  let discount=document.getElementById("discount").innerText;
  let tax=document.getElementById("tax").innerText;
  let total=document.getElementById("total").innerText;
    
  let obj={
      discount:discount,
      total : total,
      subtotal : subtotal,
      tax:tax
      
  }
  console.log(obj);
  localStorage.setItem("selectedCars",JSON.stringify(data));
  localStorage.setItem("PaymentDetails",JSON.stringify(obj));
  window.location.href="paymentPage.html";
}

