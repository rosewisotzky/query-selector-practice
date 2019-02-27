// 1. Use JavaScript to obtain a reference to the first section with the class of article_header
// and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const artHeader = document.querySelector(".article__header"); 
artHeader.textContent = "Welcome to the Rose Wisotzky blog"
//2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value
//  to article__header important.
const artHeaderAll = document.querySelectorAll(".article__header");
for (let i = 0; i < artHeaderAll.length; i++) {
    artHeaderAll[i].classList.add("important");
    console.log(artHeaderAll);
}

//3. Obtain a reference the element with a class of dashed and remove it.
const dashedEl = document.querySelectorAll(".dashed");
for (let i = 0; i < dashedEl.length; i++) {
    dashedEl[i].classList.remove("dashed");
    console.log(dashedEl);
}

// 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.y
const artFooter = document.querySelector(".article__footer");
artFooter.classList.add("goldenrod");
console.log(artFooter);