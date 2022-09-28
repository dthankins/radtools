function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
} // end numberWithCommas



function setNewValues(){  // sets new values

  spendValue = document.getElementById("spend").value.replaceAll(',', ''); // the replaceAll gets rid of the commas so the cauculations work

  document.getElementById("spend").value = numberWithCommas(spendValue);

  withdrawlValue = document.getElementById("withdrawl").value;//.replaceAll(',', '');

  

  if(withdrawlValue>0){
    multipleValue = 100/withdrawlValue;
    document.getElementById("multiple").value = multipleValue;
    document.getElementById("withdrawl").value = withdrawlValue + " %" ;

    A = spendValue * multipleValue;
    document.getElementById("amountNeed").value = numberWithCommas(A); 
    //A= A.replaceAll(',', '');

  }
  

  P = document.getElementById("amountHave").value.replaceAll(',', '');
  document.getElementById("amountHave").value = numberWithCommas(P); 

  //differencePA = document.getElementById("difference").value; // not even used i dont think

  M = document.getElementById("contribution").value.replaceAll(',', '');
  document.getElementById("contribution").value = numberWithCommas(M); 
  M=M.replaceAll(',', '');

  //r = document.getElementById("rate").value.replaceAll(',', '');
  R = document.getElementById("rate").value;//.replaceAll('%', '');
  if(R>0){
    //R.replaceAll('%', '');
    document.getElementById("rate").value = R + " %" ;

    R.replaceAll('%', '');
    R=R/100;
    console.log("R" + R);
  }


  //r = r.replaceAll(',', '');


  
  if(R>0){

    n = 12; //document.getElementById("numberCompundsPerYear").value;

    A = document.getElementById("amountNeed").value.replaceAll(',', '');

    console.log(A + " A should be 1250000");
    console.log(R + " R should be 0.04");
    console.log(n+ " n should be 12");
    console.log(M + " M should be 1000");

    num1 = 1000+((R/n)*A)+M;    //(A*(R/n))+M; // added 1 but not sure why
    console.log(num1 + " num1 should be 5,166.67");

    num2 = 1000+(P*(R/n))+M; // added 1 but not sure why
    console.log(num2 + " num2 should be 1,666.67");

    num3 = 1+(R/n);
    console.log(num3 + " num3 should be 1.003333333");
    

    numerator = Math.log(num1/num2);
    console.log(numerator + " should be 1.13");

    denominatorLN = Math.log(num3);
    denominator = denominatorLN*n;
    console.log(denominator + " should be 0.03993348111");

    time2 = Math.log((A*R/n+M)/(P*R/n+M)) / n / Math.log(1+R/n);

    console.log(time2 + " is time2.");




    time = numerator/denominator;
    time = time.toFixed(1);  
    document.getElementById("time").value = time;

  }
  



}  // end setNewValues







