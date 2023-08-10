
const bottomDiv = document.querySelector('#oneee')


const numSteps = 20.0;

let page;
let prevRatio = 0.0;
let increasingOpacity = 0;
let decreasingOpacity = 0

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(page);
}


function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        bottomDiv.style.opacity = entry.intersectionRatio - 0.1
    }
    });
  }
  

function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;
  
    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
}

window.addEventListener(
  "load",
  (event) => {
    page = document.querySelector('.first');

    createObserver();
  },
  false
);
