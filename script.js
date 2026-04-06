async function loadPage(page) {
  const res = await fetch(page);
  const data = await res.text();
  document.getElementById("content").innerHTML = data;
}

// Load home by default
loadPage("home.html");
