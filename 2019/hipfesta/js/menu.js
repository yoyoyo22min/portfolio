// JavaScript source code


// 메뉴에 따른 hide/show


$(document).ready(function () {
    $("#Bhipfesta").click(function () {
        $("#main").hide();
        $("#hipfesta").show();
        $("#lineup").hide();
        $("#timetable").hide();
        $("#ticket").hide();
        $("#sns").hide();
        $("#sponsor").hide();
    });
    $("#Blineup").click(function () {
        $("#main").hide();
        $("#hipfesta").hide();
        $("#lineup").show();
        $("#timetable").hide();
        $("#ticket").hide();
        $("#sns").hide();
        $("#sponsor").hide();
    });
    $("#Btimetable").click(function () {
        $("#main").hide();
        $("#hipfesta").hide();
        $("#lineup").hide();
        $("#timetable").show();
        $("#ticket").hide();
        $("#sns").hide();
        $("#sponsor").hide();
    });
    $("#Bticket").click(function () {
        $("#main").hide();
        $("#hipfesta").hide();
        $("#lineup").hide();
        $("#timetable").hide();
        $("#ticket").show();
        $("#sns").hide();
        $("#sponsor").hide();
    });
    $("#Bsns").click(function () {
        $("#main").hide();
        $("#hipfesta").hide();
        $("#lineup").hide();
        $("#timetable").hide();
        $("#ticket").hide();
        $("#sns").show();
        $("#sponsor").hide();
    });
    $("#Bsponsor").click(function () {
        $("#main").hide();
        $("#hipfesta").hide();
        $("#lineup").hide();
        $("#timetable").hide();
        $("#ticket").hide();
        $("#sns").hide();
        $("#sponsor").show();
    });
});
