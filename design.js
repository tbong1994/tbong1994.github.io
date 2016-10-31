
//JS FOR THE WEBSITE.

//DISPLAY TIME
function clock(){
	date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];
    todaysDate = date.getDate();
    day = date.getDay();
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    h = date.getHours();
    if(h<10)
    {
        h = "0"+h;
    }
    else if(h>12){
    	h = h%12;
    }
    m = date.getMinutes();
    if(m<10)
    {
        m = "0"+m;
    }
    // s = date.getSeconds();
    // if(s<10)
    // {
    //         s = "0"+s;
    // }
    dateToDisplay= months[month]+' '+ todaysDate+' '+days[day] +' '+year;
    clockToDisplay = h+':'+m;
    document.getElementById("date").innerHTML = dateToDisplay;
    document.getElementById("clock").innerHTML = clockToDisplay;
    setTimeout(clock,'1000');
    return true;
}

function display(){
	clock();
}

display();