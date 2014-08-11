var dt = new Date();
var date = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
var last_day = date.getDate();

var loop_date = new Date(dt.getFullYear(), dt.getMonth()+ 1, 0);

for(var i=0; i < last_day; i++){
    loop_date.setDate(i + 1);
    var day = loop_date.getDay();
    if(day != 0 && day != 6){
        iimSet("schedule_button", "button_05_schdule_1100170294"+("0"+(i + 1)).slice(-2));
        iimPlay("schedule");
    }
}