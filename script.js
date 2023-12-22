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
        entry.target.classList.add('animation');
      }
    });
  }, {
	threshold: 0.5
});
  

const eleToAnim = 
    [
        document.querySelector('.me'), 
        document.querySelector('.language p'), 
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

document.querySelectorAll(".projet-card").forEach(element => {
    element.style.animationDelay = String(animDelay) + "s"
    animDelay += 0.1
    observer.observe(element)
});