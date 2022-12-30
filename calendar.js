let month = document.getElementById("selectedMonth");
let year = document.getElementById("selectedYear");
var dt = new Date();
var styleToggle = document.getElementById("toggle");
var day = new Date(year.value,month.value-1,0).getDay();

nameMonths()
function nameMonths() {
    let endDate = new Date(
        year.value, 
        month.value, 
        0
        ).getDate();
    
    let day = new Date(
        year.value,
        month.value-1,
        0
    ).getDay();
    console.log(day, "hello")
    curryear = year.value;
    let today = new Date(); 

    let cells ="";
    for(let i=day;i>=0;i--){
        if(day===6){
            cells += "";
        }else{
            cells += "<div>"+" "+"</div>"
        }
    }
      

    for(i=1;i<=endDate;i++){
        if(i==today.getDate() && curryear == today.getFullYear()){
            cells += "<div class='today'>"+i+"</div>";
        }else{
            cells += "<div>"+i+"</div>";
        }
    }
    document.getElementsByClassName("days")[0].innerHTML=cells; 
}


let result = [];
function EnterDate(){
    let godate = document.getElementById("value");
    let val = godate.value;
    console.log(val)
    if(result.indexOf(val) >0){
        result.splice(result.indexOf(val))
        styleToggle.innerHTML += `.days div:nth-child(${parseInt(val)+day+1}){background-color:white}`
    }else if(result.indexOf(val) === -1 && val >=1 && val<=31){
        result.push((val))
        styleToggle.innerHTML += `.days div:nth-child(${parseInt(val)+day+1}) {background-color:green}`
    }
    val="";
}
const btn = document.getElementById("btn");
btn.addEventListener('click',EnterDate());



 

