let classDirection = document.getElementsByClassName("project-cover");

for(let i = 1; i < classDirection.length; i+=2){
  classDirection[i].classList.add('align-left');
}