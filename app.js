function updateProduct (product, price, isIncreasing) {
    const productInput = document.getElementById(product+'-amount'); 
    let productAmount = productInput.value; 

    if (isIncreasing) {
        productAmount = parseInt(productAmount) + 1;
    }
    else if (productAmount>0) {
        productAmount = parseInt(productAmount) - 1;
    }
    productInput.value = productAmount;

    const productTotal = document.getElementById(product+'-total')
    productTotal.innerText = productAmount*price;
    calculateTotal()
}


function getInputValue (product) {
    const productInput = document.getElementById(product+'-amount'); 
    const productAmount = parseInt(productInput.value); 
    return productAmount; 
}

function calculateTotal (){
    const phoneAmount = getInputValue('phone');
    const caseAmount = getInputValue('case'); 

    const phoneTotal = phoneAmount * 1219; 
    const caseTotal = caseAmount * 59; 
    const subTotal = phoneTotal+caseTotal;
    const tax = subTotal/10;
    const total = subTotal+tax; 

    document.getElementById('sub-total').innerText = subTotal; 
    document.getElementById('tax-total').innerText = tax; 
    document.getElementById('total').innerText = total;

}


// increase phone amount 

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct ('phone',1219, true)
})


// decrease phone amount 
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct ('phone',1219, false)
})



// increase the case amount 
document.getElementById("case-plus").addEventListener("click", function(){

    updateProduct ('case',59, true)

})


// decrease the case amount
document.getElementById('case-minus').addEventListener('click', function(){

    updateProduct ('case',59, false)
})