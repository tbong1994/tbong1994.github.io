
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
    hours = date.getHours();
    var amOrPm = "AM";
    if(hours<10)
    {
        hours = "0"+hours;
    }
    else if(hours>=12){
    	hours = hours%12;
        amOrPm = "PM";
    }
    minutes = date.getMinutes();
    if(minutes<10)
    {
        minutes = "0"+minutes;
    }
    seconds = date.getSeconds();
    if(seconds<10)
    {
        seconds = "0"+seconds;
    }
    dateToDisplay= months[month]+' '+ todaysDate+' '+days[day] +' '+year;
    clockToDisplay = hours+':'+minutes+ ' ' + amOrPm;
    document.getElementById("date").innerHTML = dateToDisplay;
    document.getElementById("clock").innerHTML = clockToDisplay;
    setTimeout(clock,'1000');

    //hand object.
    var hands = [
        {
            hand: 'hours',
            angle: (hours * 30) + (minutes / 2)
        },
        {
            hand: 'minutes',
            angle: (minutes * 6)
        },
        {
            hand: 'seconds',
            angle: (seconds * 6)
        }
    ];
    for (var j = 0; j < hands.length; j++) {
        var elements = document.querySelectorAll('.' + hands[j].hand);
        for (var k = 0; k < elements.length; k++) {
            elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
            elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
            // If this is a minute hand, note the seconds position (to calculate minute position later)
            if (hands[j].hand === 'minutes') {
                elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
            }
        }
    }
    return true;
}

function display(){
	clock();
}
display();
