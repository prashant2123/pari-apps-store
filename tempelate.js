
function getNavbarContents(){
    return "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
        "    <div class=\"container\">\n" +
        "        <a class=\"navbar-brand\" href=\"index.html\"> <img src=\"images/pariapps_logo.png\" alt=\"Avatar Logo\" style=\"width:40px;\" class=\"rounded-pill\"></a>\n" +
        "        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\">\n" +
        "            <span class=\"navbar-toggler-icon\"></span>\n" +
        "        </button>\n" +
        "        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n" +
        "            <ul class=\"navbar-nav ms-auto\">\n" +
        "                <li class=\"nav-item\"><a class=\"nav-link\" href=\"index.html\">Home</a></li>\n" +
        "                <li class=\"nav-item\"><a class=\"nav-link\" href=\"test.html\">Terms of use</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</nav>";

}
function getDonateContent1(){
    return "<a href=\"https://www.paypal.com/paypalme/prashant2123?locale.x=en_GB&country.x=IN\" target=\"_blank\"\n" +
        "               style=\"background:#0a1c4e; padding:12px 20px; border-radius:8px; color:#ecf0f5; font-weight:normal; text-decoration:none;\">\n" +
        "                ❤️ Support on <b>PayPal</b>\n" +
        "            </a>";
}
function customizableDiv(){
    return "";

}
function getFetchUrl(){
    let prefex = '';
    let url = new URL(window.location.href);
    let hostname = url.hostname;
    if (hostname === "prashant2123.github.io"){
        prefex = 'pari-apps-store/';
    }else{
        prefex = '';
    }
    return prefex;
}

