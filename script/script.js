let $daily = $(".daily"), $weekly = $(".weekly"), $monthly = $(".monthly"), currentState;
let time = [$daily, $weekly, $monthly];

function triggerCard(index){
    time.forEach(element => element.hide(200));
    time[index].show(200);
}



function updateCurrentState(state){
    currentState = state;
    triggerCard(currentState);
    console.log(currentState);
}

$(".daily-s").click(function(){
    updateCurrentState(0);
});
$(".weekly-s").click(function(){
    updateCurrentState(1);
});
$(".monthly-s").click(function(){
    updateCurrentState(2);
});


currentState = 0
triggerCard(currentState);