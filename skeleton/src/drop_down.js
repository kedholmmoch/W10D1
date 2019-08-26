
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  let dogArray = [];
  
  Object.keys(dogs).forEach( (el) => {
    let newA = document.createElement("a");
    newA.innerHTML = el;
    newA.href = dogs[el];
    newA.setAttribute('target', '_blank');
    let newLi = document.createElement("li");
    newLi.classList.add("dog-link");
    newLi.classList.add("hide");
    newLi.appendChild(newA);
    dogArray.push(newLi);
  });

  return dogArray;
}

export const attachDogLinks = function() {
  let dogLinks = dogLinkCreator(dogs);
  const dogList = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach( (dog) => {
    dogList.appendChild(dog);
  });
};

export const handleEnter = function() {
  const dogLinks = Array.from(document.getElementsByClassName('dog-link'));
  const dogList = document.querySelector('.drop-down-dog-nav');

  dogList.addEventListener('mouseenter', e => {
    dogLinks.forEach((link) => {
      link.classList.remove("hide");
    });
  });
}

export const handleLeave = function() {
  const dogLinks = Array.from(document.getElementsByClassName('dog-link'));
  const dogList = document.querySelector('.drop-down-dog-nav');

  dogList.addEventListener('mouseleave', e => {
    dogLinks.forEach((link) => {
      link.classList.add("hide");
    });
  });
}