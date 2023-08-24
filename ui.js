$(document).ready(function() {
    let click = $("#click");
    let idle = $("#idle")
    let settings = $("#settings");
    let prestige = $("#prestige")
    click.show();
    idle.hide();
    settings.hide();
    prestige.hide();
    $(".click-button").click(function(){
        settings.hide();
        idle.hide();
        prestige.hide();
        click.show();
    });
    $(".idle-button").click(function(){
        click.hide();
        settings.hide();
        prestige.hide();
        idle.show();
    })
    $(".prestige-button").click(function(){
        prestige.show();
        click.hide();
        settings.hide();
        idle.hide();
    })
    $(".settings-button").click(function(){
        click.hide();
        idle.hide();
        prestige.hide();
        settings.show();
    });
    $("#reset").click(function(){
        localStorage.clear();
        location.reload(true)
    });
});