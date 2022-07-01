const home = document.querySelector('.home')
const homeButton = document.querySelector('.homeButton')

const theJob = document.querySelector('.the-job')
const theJobButton = document.querySelector('.theJobButton')

const steps = document.querySelector('.steps')
const stepsButton = document.querySelector('.stepsButton')

const students = document.querySelector('.students')
const studentsButton = document.querySelector('.studentsButton')

const arrowUp = document.querySelector('.arrowUp')
window.onscroll = function() { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        console.log('yes')
        arrowUp.style.display = "block"
    } else {
        arrowUp.style.display = "none";
    }
}

function scroll(element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" })
}

homeButton.addEventListener('click', function() {
    scroll(homeButton)
})
theJobButton.addEventListener('click', function() {
    scroll(theJob)
})
stepsButton.addEventListener('click', function() {
    scroll(steps)
})
studentsButton.addEventListener('click', function() {
    scroll(students)
})

arrowUp.addEventListener('click', function() {
    scroll(home)

})