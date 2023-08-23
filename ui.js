$(document).ready(function() {
    let list = $("#upgrades");
    let settings = $("#settings");
    list.show();
    settings.hide();
    $("#settings-button").click(function(){
        list.hide();
        settings.show();
    });
    $("#home").click(function(){
        list.show();
        settings.hide();
    });
    $("#reset").click(function(){
        localStorage.clear();
        location.reload(true)
    });
});