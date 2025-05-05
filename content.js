const TARGET_CITY = "brooklyn, ny";

function hideListingsNotInCity() {

  const cityRegex = /^([A-Za-z' \-]+, [A-Z]{2}|Ships to you)$/i;
  const matchingSpans = Array.from(document.querySelectorAll("span")).filter(span => {
    const text = span.innerText?.trim();
    return cityRegex.test(text);
  });

  matchingSpans.forEach(span => {
    const cityText = span.innerText?.trim().toLowerCase();

    let parent = span;
    for (let i = 0; i < 6; i++) {
      if (parent?.parentElement) {
        parent = parent.parentElement;
      }
    }

    if (parent && cityText !== TARGET_CITY) {
      parent.style.display = "none";
    }
  })
}

setInterval(() => {
  if (window.location.pathname.includes("/marketplace")) {
    hideListingsNotInCity();
  }
}, 1000);