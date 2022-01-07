//Table of Contents------------------------------------------------------------------------------------

//show me time





console.log('Case JS');

//show me time
function showMeTime(){
    let timmy = setInterval(showTime, 1000);
    let seconds = 3595;

    function showTime() {
        //update the time as hours, minutes, and seconds 00:00:00
        seconds++;
        let hours = Math.floor(seconds / 3600);
        let mins = Math.floor(seconds / 60) - (hours * 60);
        let secs = Math.floor(seconds % 60);
        let output = hours.toString().padStart(2, '0') + ':' +
            mins.toString().padStart(2, '0') + ':' +
            secs.toString().padStart(2, '0');
        console.log(output);
    }
}

// showMeTime();