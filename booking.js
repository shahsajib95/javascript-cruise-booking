//First Class
const firstClassAmount = document.getElementById("firstClass");

document.getElementById("firstClassPlus").addEventListener("click", function () {
    const newTickets = parseFloat(firstClassAmount.value) + 1;
    firstClassAmount.value = newTickets;
    updatePlusValue(150)
  });

document.getElementById("firstClassMinus").addEventListener("click", function () {
    const newTickets = parseFloat(firstClassAmount.value) - 1;
    if (newTickets < 0) {
      alert("Ticket value can not be negative");
      firstClassAmount.value = 0;
    } else {
      firstClassAmount.value = newTickets;
      updateMinusValue(150)
    }
  });


//Economy
const EconomyAmount = document.getElementById("economy");

document.getElementById("economyPlus").addEventListener("click", function () {
    const newTickets = parseFloat(EconomyAmount.value) + 1;
    EconomyAmount.value = newTickets;
    updatePlusValue(100)
  });

document.getElementById("economyMinus").addEventListener("click", function () {
    const newTickets = parseFloat(EconomyAmount.value) - 1;
    if (newTickets < 0) {
      alert("Ticket value can not be negative");
      EconomyAmount.value = 0;
    } else {
        EconomyAmount.value = newTickets;
        updateMinusValue(100)
    }
  });

  //Update Value
  const subTotal = document.getElementById('subTotal');
  const vat = document.getElementById('vat');
  const total = document.getElementById('total');


  function updatePlusValue(value){
    subTotal.innerText = value + parseFloat(subTotal.innerText)
    vat.innerText = parseFloat(subTotal.innerText) / 10
    total.innerText = parseFloat(vat.innerText) + parseFloat(subTotal.innerText)
  }
  function updateMinusValue(value){
    subTotal.innerText = parseFloat(subTotal.innerText) - value
    vat.innerText = parseFloat(subTotal.innerText) / 10
    total.innerText = parseFloat(vat.innerText) + parseFloat(subTotal.innerText)
  }


  document.getElementById("book").addEventListener("click", function () {
    if(parseFloat(total.innerText) === 0){
      alert("No ticket. Please add a ticket");
    }else{
      alert("Tickets are booked successfully.");
      firstClassAmount.value = 0;
      EconomyAmount.value = 0;
      subTotal.innerText = 0
      vat.innerText = 0
      total.innerText = 0
    }
  });

