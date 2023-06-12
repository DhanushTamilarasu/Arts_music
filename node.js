 
document.querySelector("#go").onclick=()=>{
    let x=document.querySelector("#name").value;
    let y=document.querySelector("#id").value;  
    console.log(x)  
    if(x=="Musician@12345"&&y=="world@#1"){
        window.location.href="./Music_Page.html";
    }
    else
    alert("please fill out the valid details");
}
function updateCalendar() {
    // Get the calendar elements
    let dateElement = document.getElementById("date");
    let dayElement = document.getElementById("day");
    let timeElement = document.getElementById("time");
    // Get the current date and time
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = now.toLocaleDateString("en-US", {weekday: "long"});
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // Format the date and time
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let dateStr = month + "/" + date + "/" + year;
    let timeStr = hours + ":" + minutes + ":" + seconds;
    // Update the calendar elements
    dayElement.innerHTML = day;
    dateElement.innerHTML = dateStr;
    timeElement.innerHTML = timeStr;
    // Set a timeout to update the calendar again after 1 second
    setTimeout(updateCalendar, 1000);
  }
  
  // Call the updateCalendar function to start the calendar
  updateCalendar();
