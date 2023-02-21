


// "" === GLOBAL_CONFIG_SITE.title.replace("LibertySea", "hello") ? document.getElementById("page-name-text").style.display = "none" : document.querySelector("#page-name-text>span").innerHTML = document.title.split(" | LibertySea")[0];
title = "LibertySea"
if (document.title === title){
    document.querySelector("#page-name-text>span").innerHTML = "LibertySea - 经验分享"
} else {
    document.querySelector("#page-name-text>span").innerHTML = document.title.split(" | LibertySea")[0];}



var $percent = document.querySelector("#nav #hotkey #top-button a.site-page i");
$percent && window.addEventListener("scroll", (function () {
    let e = document.body.scrollHeight || document.documentElement.scrollHeight,
        t = window.innerHeight || document.documentElement.clientHeight;
    $percent.dataset.percent = ((document.body.scrollTop || document.documentElement.scrollTop) / (e - t) * 100).toFixed(0)
}));

