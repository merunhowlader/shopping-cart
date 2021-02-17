

function updateAmountPrice(amount ,price,iValue){

    if(amount<=1 && iValue==-1){

    }
    else{
    const TotalPhonePriceNumber =parseFloat(price);

    const perPhonePrice=TotalPhonePriceNumber/amount;

    const NewTotalPhoneAmountNumber=amount+iValue;
    document.getElementById("TotalPhoneAmount").value=NewTotalPhoneAmountNumber;

    const newTotalPhonePriceNumber=perPhonePrice*NewTotalPhoneAmountNumber;
    console.log(newTotalPhonePriceNumber);
    document.getElementById("TotalPhonePrice").innerText=newTotalPhonePriceNumber;

    }
    



}

const btnPhonePlus=document.getElementById("btnPhonePlus");
btnPhonePlus.addEventListener('click',function(){
    const TotalPhoneAmount =document.getElementById("TotalPhoneAmount").value;
    const TotalPhoneAmountNumber =parseFloat(TotalPhoneAmount);

    const TotalPhonePrice= document.getElementById("TotalPhonePrice").innerText;

    updateAmountPrice(TotalPhoneAmountNumber,TotalPhonePrice,1);
}
)
var btnPhoneMinus=document.getElementById("btnPhoneMinus");
btnPhoneMinus.addEventListener('click',function(){
    const TotalPhoneAmount =document.getElementById("TotalPhoneAmount").value;
    const TotalPhoneAmountNumber =parseFloat(TotalPhoneAmount);
    const TotalPhonePrice= document.getElementById("TotalPhonePrice").innerText;


    updateAmountPrice(TotalPhoneAmountNumber,TotalPhonePrice,-1);
    // const NewTotalPhoneAmountNumber=TotalPhoneAmountNumber-1;
    // document.getElementById("TotalPhoneAmount").value=NewTotalPhoneAmountNumber;
    // console.log(TotalPhoneAmount);
    
})


