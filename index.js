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