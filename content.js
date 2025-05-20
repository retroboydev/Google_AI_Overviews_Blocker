const patterns = [
  /ai overview/i,  // en
  /Обзор, сгенерированный искусственным интеллектом/i // ru
]

const observer = new MutationObserver(() => {
  // each time there's a mutation in the document see if there's an ai overview to hide
  const aiOverviewH1 = [...document.querySelectorAll('h1')].find(h1 => patterns.some(pattern => pattern.test(h1.innerText)));

  if (aiOverviewH1?.parentElement) {
    aiOverviewH1.parentElement.style.display = "none";
  }

  // const mainElement = document.querySelector('[role="main"]');
  // if (mainElement) {
  //   mainElement.style.marginTop = "24px";
  // }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
