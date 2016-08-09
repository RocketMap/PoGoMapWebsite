$(function() {
    var showingApp = false;
    var clone = $("#first-visual").clone();
    // TODO: make it work on mobile, this was supposed to be responsive - update Bootstrap?
    iframeapp = `<div class="container">
                <div id="pogomapp" class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://vision.pokemongo-hk.xyz/" with="100%"></iframe>
                </div>
             </div>`
    $("#try-it").click(function () {
        if (!showingApp) {
            $("#first-visual").empty().append(iframeapp);
            $("#try-it").text("Hide it!");
            showingApp = true;
        }
        else {
            $("#first-visual").empty().replaceWith(clone);
            $("#try-it").text("Try it out!");
            showingApp = false;
        }
    });
});
