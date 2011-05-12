function ignorePosts(ignored) {
    var rows = $(".windowbg").add(".windowbg2").each(function(index, element) {
        var nickLink = $(element).find('a[href*="action=profile;u="]').first()[0]
        var nick = nickLink.innerHTML.trim()

        if (ignored.indexOf(nick) >= 0) {
            element.innerHTML = "<strong style='color: red; font-weight: bold'>IGNORED: " + nick + "</strong>";
        }
    })
}

chrome.extension.sendRequest({method: "getIgnored"}, function(response) {
  console.log("Ignoring users: " + response.ignored)
  ignorePosts(response.ignored)
});
