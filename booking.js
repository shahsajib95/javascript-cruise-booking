function updateTicketNumber(ticket, isIncreasing) {
  const ticketInput = document.getElementById(ticket + '-number');
  let ticketNumber = ticketInput.value;
  if (isIncreasing == true) {
      ticketNumber = parseInt(ticketNumber) + 1;
  }
  else if (ticketNumber > 0) {
      ticketNumber = parseInt(ticketNumber) - 1;
  }
  ticketInput.value = ticketNumber;
  // calculate total
  calculateTotal();
}

function getInputValue(ticket) {
  const ticketInput = document.getElementById(ticket + '-number');
  const ticketNumber = parseInt(ticketInput.value);
  return ticketNumber;
}

function calculateTotal() {
  const firstClassTotal = getInputValue('firstClass') * 150;
  const economyTotal = getInputValue('economy') * 100;
  const subTotal = firstClassTotal + economyTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  // update on the html
  document.getElementById('subTotal').innerText = subTotal;
  document.getElementById('vat').innerText = tax;
  document.getElementById('total').innerText = totalPrice;
}

// phone increase decrease events
document.getElementById('firstClass-Plus').addEventListener('click', function () {
  updateTicketNumber('firstClass', true);
});
document.getElementById('firstClass-Minus').addEventListener('click', function () {
  updateTicketNumber('firstClass', false);
})


// handle case increase decrease events
document.getElementById('economy-Plus').addEventListener('click', function () {
  updateTicketNumber('economy', true);
});
document.getElementById('economy-Minus').addEventListener('click', function () {
  updateTicketNumber('economy', false);
})


  document.getElementById("book").addEventListener("click", function () {
    if(parseFloat(document.getElementById('total').innerText) === 0){
      alert("No ticket. Please add a ticket");
    }else{
      alert("Tickets are booked successfully.");
      document.getElementById('firstClass-number').value = 0;
      document.getElementById('economy-number').value = 0;
      document.getElementById('subTotal').innerText = 0;
      document.getElementById('vat').innerText = 0;
      document.getElementById('total').innerText = 0;
    }
  });

