const introMessage = new Typed(".word-change", {
    strings: ["Développeur", "Passionné du", "Friand du", "Admirateur du", "Amoureux du", "Affectionne le", "Adore le", "Apprécie le"],
    typeSpeed: 70,
    backDelay: 1300,
    startDelay: 450,
    loop: true
})

const introDesc = new Typed(".pres-desc", {
    strings: ["Un Étudiant de 18 ans qui souhaite travailler dans le web."],
    typeSpeed: 20,
    startDelay: 1500,
    showCursor: false
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // C'est un peu le bazar... Mais, ça marche 👍
        if(entry.target.classList[0] == "projets-container"){
            let projetCard = entry.target.children[entry.target.childElementCount-1].children;
            for(let i = 0; i < projetCard.length; i++){
                projetCard[i].classList.add('animation');
            }
        } else {
            entry.target.classList.add('animation');
        }
      }
    });
  }, {
	threshold: 0.25
});
  

const eleToAnim = 
    [
        document.querySelector('.me'), 
        document.querySelector('.language p'), 
        document.querySelector('.best-project') 
    ]
eleToAnim.forEach(element => {
    observer.observe(element)
});


let animDelay = 0.1;

document.querySelectorAll(".logo").forEach(element => {
    element.style.animationDelay = String(animDelay) + "s"
    animDelay += 0.1
    observer.observe(element)
});

animDelay = 0.1

document.querySelectorAll(".projets-container").forEach(element => {
    // Toujours le bazar, mais tant que ça marche...
    console.log(element.children[element.childElementCount-1].children)
    let projetCard = element.children[element.childElementCount-1].children
    for(let i = 0; i < projetCard.length; i++){
        projetCard[i].style.animationDelay = String(animDelay) + "s"
        animDelay += 0.1
    }
    animDelay = 0.1;
    observer.observe(element)
});