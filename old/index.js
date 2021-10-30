function changeTab(name) {
    document.querySelectorAll(".pazdikan-active").forEach((e) => e.classList.remove("pazdikan-active") );
    document.querySelector(`.pazdikan-${name}Tab`).classList.add("pazdikan-active");
    window.document.title = "pazdikan.party › " + name + " page";
}
GitHubCalendar(".calendar", "pazdikan", { responsive: true, tooltips: true });

$(document).ready(function () {
    setTimeout(function () {
        $('.load-delay').each(function () {
            var imagex = $(this);
            var imgOriginal = imagex.data('original');
            $(imagex).attr('src', imgOriginal);
        });
    }, 1000);
});

var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
function loadVideo(iframe) {
    $.getJSON(reqURL + iframe.getAttribute('cid'),
        function(data) {
            var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
            console.log(videoNumber);
            var link = data.items[videoNumber].link;
            id = link.substr(link.indexOf("=") + 1);
            iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0");
        }
    );
}
var iframes = document.getElementsByClassName('latestVideoEmbed');
for (var i = 0, len = iframes.length; i < len; i++) {
    loadVideo(iframes[i]);
}