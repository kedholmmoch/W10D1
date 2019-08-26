
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let newP = document.createElement("p");
  let newString = document.createTextNode(string);
  newP.appendChild(newString);
  if (htmlElement.children) {
    let children = Array.from(htmlElement.children);
    children.forEach( (child) => {
      child.remove();
    })
  }
  htmlElement.appendChild(newP);

};

htmlGenerator('Party Time.', partyHeader);