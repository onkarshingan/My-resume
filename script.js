async function loadSection(page) {
  const res = await fetch(page);
  const data = await res.text();
  document.getElementById("content").innerHTML = data;
}

// Load home first
loadSection("home.html");
