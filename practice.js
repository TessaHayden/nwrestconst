$(function () {
    $("#btnShowBanana").click(function () {
        $("#banana").collapse("show");
    });
    $("#btnShowMonkey").click(function () {
        $("#monkey").collapse("show");
    });
    $("#btnHideBanana").click(function () {
        $("#banana").collapse("hide");
    });
    $("#btnHideMonkey").click(function () {
        $("#monkey").collapse("hide");
    });
});