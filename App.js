var product_total_amount = document.getElementById('product_total_amount');
var shiping_charge = document.getElementById('shiping_charge');
var total_cart_amount = document.getElementById('total_cart_amount');
var discount_code1 = document.getElementById('discount_code1');
var error_trw = document.getElementById('error_trw');
console.log(total_cart_amount);
console.log(shiping_charge);


// Decrement
const decreaseNUm = (incdec , itemPrice) =>{
    const texBoxVal = document.getElementById(incdec);
    var itemPrice = document.getElementById(itemPrice);

if(texBoxVal.value <= 0){
    texBoxVal.value = 0;
    alert('less Then 0 Not allowed');
  
}
else{
    texBoxVal.value = parseInt(texBoxVal.value) - 1 ;
    texBoxVal.style.background = 'white';
    texBoxVal.style.color = 'black';
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 15;
    product_total_amount.innerHTML = parseInt(product_total_amount.innerHTML) - 15;
    total_cart_amount.innerHTML = parseInt(product_total_amount.innerHTML) + parseInt(shiping_charge.innerHTML);

}
}
// increment

const increaseNum = (incdec , itemPrice) =>{
    const texBoxVal = document.getElementById(incdec);
    var itemPrice = document.getElementById(itemPrice);

    if(texBoxVal.value < 5){
        texBoxVal.value = parseInt(texBoxVal.value) + 1 ;
    itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 15;
    product_total_amount.innerHTML = parseInt(product_total_amount.innerHTML) + 15;
    total_cart_amount.innerHTML = parseInt(product_total_amount.innerHTML) + parseInt(shiping_charge.innerHTML);
    

         
    }
    else{
        alert('max 5 allowed')
        texBoxVal.style.background = 'red';
        texBoxVal.style.color = 'white';
    }
}
const discount_code = () =>{
    let totalamtcurr = parseInt(total_cart_amount.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(discount_code === 'danish'){
        let newtotalamt = totalamtcurr - 15 ; 
        total_cart_amount.innerHTML = newtotalamt;

    }   
    else{
        error_trw.innerHTML = "Try Again! Valid Code is danish";
    }
}