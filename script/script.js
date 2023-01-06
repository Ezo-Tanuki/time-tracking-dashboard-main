let $daily = $(".daily"), $weekly = $(".weekly"), $monthly = $(".monthly"), currentState;
let time = [$daily, $weekly, $monthly];

function triggerCard(index){
    time.forEach(element => element.hide());
    time[index].show();
}



function updateCurrentState(select){
    currentState = select.data("index");
    triggerCard(currentState);
    console.log(currentState);
}

$(".daily-s").click(updateCurrentState(), $(".daily-s"))
$(".monthly-s").click(updateCurrentState(), $(".monthly-s"))
$(".weekly-s").click(updateCurrentState(), $(".weekly-s"))

currentState = 0
triggerCard(currentState);