


// "" === GLOBAL_CONFIG_SITE.title.replace("LibertySea", "hello") ? document.getElementById("page-name-text").style.display = "none" : document.querySelector("#page-name-text>span").innerHTML = document.title.split(" | LibertySea")[0];
title = "LibertySea"
if (document.title === title){
    document.querySelector("#page-name-text>span").innerHTML = "LibertySea - 经验分享"
} else {
    document.querySelector("#page-name-text>span").innerHTML = document.title.split(" | LibertySea")[0];}



// var $percent = document.querySelector("#nav #hotkey #top-button a.site-page a.totopbtn>span").innerHTML;
// $percent && window.addEventListener("scroll", (function () {
//     let e = document.body.scrollHeight || document.documentElement.scrollHeight,
//         t = window.innerHeight || document.documentElement.clientHeight;
//     $percent.dataset.percent = ((document.body.scrollTop || document.documentElement.scrollTop) / (e - t) * 100).toFixed(0)
// }));

window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100)

    document.querySelector(".totopbtn>span").innerHTML = result;

}



