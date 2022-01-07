//create and send event
const lukiOBJ =  {
    name: 'luki',
    age: 30,
    hobby: ['cars','js', 'games'],
    married: true
}
function sendEventWithData(){
    console.log('Create event')
    var event = new CustomEvent("lukiEvent", { "detail": lukiOBJ });
    console.log('Send Event')
    document.dispatchEvent(event);
}

//when event come
function runFunctionaAfterReceivingEvent(){
    document.addEventListener("lukiEvent", function(e) {
        const detailOfEvent = e.detail;

        if(detailOfEvent){
            console.log(detailOfEvent);
        }
        if(detailOfEvent.hobby){
            const hobby = getHobby(detailOfEvent);
            changeResult(hobby, 'orange')
        }
    });
}

//typical function
function getHobby(data){;
    const hobby = data.hobby.join(', ');
    return `Luki hobbys' : ${hobby}.`;
}
function changeResult(text, color){
    const result = document.querySelector('.result__value');
    result.innerText = text;
    result.style.backgroundColor = color;
}
function sendDelayEvent(){
    setTimeout(sendEventWithData, 3000);
}

sendDelayEvent();
runFunctionaAfterReceivingEvent();