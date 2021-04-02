function laréponse(){
    var réponse = prompt("J'ai toujours eu des problèmes gastriques, un ulcère probablement...");
  if (réponse=="Saturne") {
    return document.location.href='Page3.html';
  }
}

var displaytext = function() {
    document.getElementById("tooltip").style.display="block";
}
setTimeout(displaytext, 1000);