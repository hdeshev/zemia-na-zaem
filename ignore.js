var ignored = ["mariiina"]

var rows = $(".windowbg").add(".windowbg2").each(function(index, element) {
  console.log("POST!")
  var nickLink = $(element).find('a[href*="action=profile;u="]').first()[0]
  var nick = nickLink.innerHTML.trim()
  console.log("Author: " + nick)

  if (ignored.indexOf(nick) >= 0) {
    element.innerHTML = "<strong style='color: red; font-weight: bold'>IGNORED: " + nick + "</strong>";
    //element.style.backgroundColor = "red"
    //element.style.height = "17px"
    //element.style.overflow = "hidden"
    //element.style.display = "none"
  }
  //console.log(nickLink)
  //console.log(element.innerHTML)      
})
