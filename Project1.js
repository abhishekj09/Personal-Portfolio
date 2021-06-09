function skills(id) {
    allCont = document.getElementsByClassName("ski-el");

    for (var i = 0; i < allCont.length; i++) {
        allCont[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

const scrollElements = document.querySelectorAll(".scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    return (
        (elementTop >= 0) && (elementBottom <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend)
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    return (
        (elementTop < 0) || (elementBottom > (window.innerHeight || document.documentElement.clientHeight))
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 0.75)) {
            displayScrollElement(el);
        }
        else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});