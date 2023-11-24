MSPFA.slide.push(() => {
  jQuery(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    if ([7,8,9,10,11,12,13,14,15,16,17,18].includes(parseInt(params.get("p")))) {
      document.getElementById("sitetheme").innerHTML = "<link rel='stylesheet' href='./assets/data/css/intro.css'>";
    }
    else {
      document.getElementById("sitetheme").innerHTML = "";
    }
  });
});