let platinum = document.getElementById("seats_platinum");
let gold=document.getElementById("seats_gold");
let silver=document.getElementById("seats_silver");
let seatrow1 = Number(platinum.getAttribute("seatrow1"));
let seatcol1 = Number(platinum.getAttribute("seatcol1"));
let seatrow2 = Number(gold.getAttribute("seatrow2"));
let seatcol2 = Number(gold.getAttribute("seatcol2"));
let seatrow3 = Number(silver.getAttribute("seatrow3"));
let seatcol3 = Number(silver.getAttribute("seatcol3"));
const amoutShowButton=document.querySelector(".seat_total_amount");
let currentrow1,currentrow2,currentrow3;

for(let i=0;i<seatrow1;i++){
  platinum.innerHTML = platinum.innerHTML + `<div class='row' id='row1-${i}'><span class="light_grey_text">${String.fromCharCode(65+i)} &nbsp; &nbsp; </span></div>&nbsp;`;
  currentrow1 = document.getElementById(`row1-${i}`);
  for(let j=0;j<seatcol1;j++){
    currentrow1.innerHTML = currentrow1.innerHTML + `<div class='seat1 pointer' id="r-${i}-${j}">${j+1}</div>`;
  }
}

for(let i=0;i<seatrow2;i++){
  gold.innerHTML = gold.innerHTML + `<div class='row' id='row2-${i}'><span class="light_grey_text">${String.fromCharCode(65+i)} &nbsp; &nbsp;&nbsp; </span></div>&nbsp;`;
  currentrow2 = document.getElementById(`row2-${i}`);
  for(let j=0;j<seatcol2;j++){
    currentrow2.innerHTML = currentrow2.innerHTML + `<div class='seat2 pointer' id="r-${i}-${j}">${j+1}</div>`;
  }
}

for(let i=0;i<seatrow3;i++){
  silver.innerHTML = silver.innerHTML + `<div class='row' id='row3-${i}'><span class="light_grey_text">${String.fromCharCode(65+i)} &nbsp; &nbsp; </span></div>&nbsp;`;
  currentrow3 = document.getElementById(`row3-${i}`);
  for(let j=0;j<seatcol1;j++){
    currentrow3.innerHTML = currentrow3.innerHTML + `<div class='seat3 pointer' id="r-${i}-${j}">${j+1}</div>`;
  }
}


//With Local storage

//--------------------------------------FOR PREMIUM-------------------------------------------------------

const seats1 = document.querySelectorAll('.seat1');
const ticketPrice1 = document.getElementById('ticket_price1').textContent;

let selectedSeats1 = [];
let ticketCount1 = 0;
let ticketTotal1 = 0;
let count=0;

if (localStorage.getItem('selectedSeats')) {
  selectedSeats1 = JSON.parse(localStorage.getItem('selectedSeats'));
  ticketTotal1 = ticketCount1 * ticketPrice1;
}

seats1.forEach(seat => {
  
  seat.addEventListener('click', e => {

    count++;
    if(count==2){
      // seat.removeEventListener("click")
      console.log(count);
      
    }
    

    if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
      ticketCount1--;
      a++;
      selectedSeats1 = selectedSeats1.filter(s => s !== seat.id);
    } else {
      seat.classList.add('selected');
      ticketCount1++;
      selectedSeats1.push(seat.id);
    }
    
    ticketTotal1 = ticketCount1 * ticketPrice1;
    
    console.log(`${ticketCount1} tickets, total cost: ${ticketTotal1}`);
    
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats1));
    amoutShowButton.innerText=ticketTotal1;
    

  });
  
 
  
});

//--------------------------------------FOR GOLD-------------------------------------------------------

const seats2 = document.querySelectorAll('.seat2');
const ticketPrice2 = document.getElementById('ticket_price2').textContent;

let selectedSeats2 = [];
let ticketCount2 = 0;
let ticketTotal2 = 0;

if (localStorage.getItem('selectedSeats2')) {
  selectedSeats2 = JSON.parse(localStorage.getItem('selectedSeats2'));
  ticketTotal2 = ticketCount2 * ticketPrice2;
}

seats2.forEach(seat => {
  if (selectedSeats2.includes(seat.id)) {
    seat.classList.add('selected');
    seat.style.backgroundColor = '#eee';
    seat.style.border="none";
  }
  
  seat.addEventListener('click', e => {
   
    if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
      ticketCount2--;
      selectedSeats2 = selectedSeats2.filter(s => s !== seat.id);
    } else {
      seat.classList.add('selected');
      ticketCount2++;
      selectedSeats2.push(seat.id);
    }
    
    ticketTotal2 = ticketCount2 * ticketPrice2;
    
    console.log(`${ticketCount2} tickets, total cost: ${ticketTotal2}`);
    
    localStorage.setItem('selectedSeats2', JSON.stringify(selectedSeats2));
    amoutShowButton.innerText=ticketTotal2;
  });
});
//--------------------------------------FOR GOLD-------------------------------------------------------

const seats3 = document.querySelectorAll('.seat3');
const ticketPrice3 = document.getElementById('ticket_price3').textContent;

let selectedSeats3 = [];
let ticketCount3 = 0;
let ticketTotal3 = 0;

if (localStorage.getItem('selectedSeats3')) {
  selectedSeats3 = JSON.parse(localStorage.getItem('selectedSeats3'));
  ticketTotal3 = ticketCount3 * ticketPrice3;
}

seats3.forEach(seat => {
  if (selectedSeats3.includes(seat.id)) {
    seat.classList.add('selected');
    seat.style.backgroundColor = '#eee';
    seat.style.border="none";
  }
  
  seat.addEventListener('click', e => {
   
    if (seat.classList.contains('selected')) {
      seat.classList.remove('selected');
      ticketCount3--;
      selectedSeats3 = selectedSeats3.filter(s => s !== seat.id);
    } else {
      seat.classList.add('selected');
      ticketCount3++;
      selectedSeats3.push(seat.id);
    }
    
    ticketTotal3 = ticketCount3 * ticketPrice3;
    
    console.log(`${ticketCount3} tickets, total cost: ${ticketTotal3}`);
    
    localStorage.setItem('selectedSeats3', JSON.stringify(selectedSeats3));
    amoutShowButton.innerText=ticketTotal3;

  });
});

//----------------------------------------------------------------------------------------------------
const seatType1=document.querySelector(".seat_type1");

seats1.forEach(seat => {
seat.addEventListener("click",()=>{
seatType1.classList.add("display_flex");
})
});
seats2.forEach(seat => {
seat.addEventListener("click",()=>{
seatType1.classList.add("display_flex");
})
});
seats3.forEach(seat => {
seat.addEventListener("click",()=>{
seatType1.classList.add("display_flex");
})
});
