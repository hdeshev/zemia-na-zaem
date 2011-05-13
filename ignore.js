function ignorePosts(ignored) {
    var rows = $(".windowbg").add(".windowbg2").each(function(index, element) {
        var nickLinks = $(element).find('b > a[href*="action=profile"]')
        var nickLink = nickLinks.first()[0]
        if (nickLink != null) {
            var nick = nickLink.innerHTML.trim()
            console.log("Post by: " + nick)

            if (ignored.indexOf(nick) >= 0) {
                console.log("Hiding post.")
                element.innerHTML = "<strong style='color: red; font-weight: bold'>СКРИТ: " + nick + "</strong>";
            }
        }
    })
}

chrome.extension.sendRequest({method: "getIgnored"}, function(response) {
  console.log("Ignoring users: " + response.ignored)
  ignorePosts(response.ignored)
});
