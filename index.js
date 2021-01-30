//converting string to num function
 function getStrToNum(id){
    let str = document.getElementById(id);
     let strNum = parseInt(str.value);
     return strNum;
 }

 // Calculating ticket total cost
function calculateTotal(ticketType,isIncrease){

    let ticketInput =document.getElementById(ticketType +'-ticket');
    let ticketCount = getStrToNum(ticketType +'-ticket')

    //increasing & decreasing ticket count
    if (isIncrease == true) {
    ticketCount = ticketCount + 1;
    }

   if (isIncrease == false && ticketCount > 0 ) {
       ticketCount = ticketCount - 1;
    }
    ticketInput.value = ticketCount;

    // calculating ticket cost
    let firstClassTicketCount = getStrToNum('first-class-ticket');
    let economyTicketCount = getStrToNum('economy-ticket')
    let subtotal = firstClassTicketCount * 150 + economyTicketCount *100

      // showing subtotal, vat and total
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('vat').innerText = subtotal * 0.1;
    document.getElementById('total').innerText = subtotal +(subtotal * 0.1)

 }

 
 //booking confirm page
 function booked(){
    //  styling
     let homePage = document.getElementById('home-page')
     let secondPage = document.getElementById('success-page');
     homePage.style.display = 'none'
     secondPage.style.display = 'block'

    //  collect and showing details
     let fClassTicketNum = getStrToNum('first-class-ticket');
     let ecoTicketNum = getStrToNum('economy-ticket');
     let total = document.getElementById('total').innerText;
     document.getElementById('details').innerHTML = 'You have booked <br>'+
      ' First class ticket  : '+fClassTicketNum +
     '<br> Economy ticket : '+ ecoTicketNum +
      ' <br>  Total cost :  $'+ total;
 }

 
