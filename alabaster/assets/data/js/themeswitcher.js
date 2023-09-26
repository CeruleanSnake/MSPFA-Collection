MSPFA.slide.push(() => {
  jQuery(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    if([1].includes(parseInt(params.get("p")))) {
      document.getElementById("sitetheme").innerHTML = "<link rel='stylesheet' href='./assets/data/css/pageone.css'>";
    }
    if([2].includes(parseInt(params.get("p")))) {
      document.getElementById("sitetheme").innerHTML = "<link rel='stylesheet' href='./assets/data/css/pagetwo.css'>";
    }
  });
});