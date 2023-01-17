//Get the user input from the page
function GetValues() {
  //Get the values from the page
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;

  //Parse our inputs into numbers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  //Verify our inputs are numbers
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //If they are numbers, generate on the page
    let numbersArray = GenerateNumbers(startValue, endValue)
    DisplayNumbers(numbersArray);
  }
  else 
  {
    //If they are not, tell the user
    Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Only integers are allowed for Perator'
      });
  }
}

//Generate out numbers
function GenerateNumbers(start, end) {
  let numbers = [];

  for (let i=start; i <= end; i++) {

    numbers.push(i);
  }

  return numbers;
}

//Display them on the page
function DisplayNumbers(numbersArray) {
  let tableBody = document.getElementById('results');
  let tableHTML="";

  for(let i=0; i<numbersArray.length;i++){
    let value = numbersArray[i];
    className='';

    //If the value is even make the className even, else its className will be odd
    if(value%2==0){
      className='even';
    }
    else{
      className = 'odd'
    }
  
    //To make the table easier to read, start a new row every 5 indexed values
    if(i%5==0){
      tableHTML+='<tr>'
    }

    //Generate the td HTML and append it to the table html
    let tableRow=`<td class=${className}>${value}</td>`
    tableHTML += tableRow;

    /*Check if the next index is divisible by 5 and if so 
    close our tr tag on the current row*/
    if((i+1)%5==0){
      tableHTML+='</tr>';
    }
  }

  tableBody.innerHTML = tableHTML;
}