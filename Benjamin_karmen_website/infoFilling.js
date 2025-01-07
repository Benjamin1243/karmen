const pTags = document.querySelectorAll("p.statPercent")
console.log(pTags)

pTags.forEach(element => {
  let upcommingWidth =  element.getAttribute("data-percent")
  element.style.width = upcommingWidth + "%"
  console.log(upcommingWidth + "px")
});