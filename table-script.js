/*
author: allison r. 
date last modified: feb 14, 2026
*/



/*** VARIABLES ***/

const tableBody = document.querySelector(".responsive-table tbody"); 

const rows = document.querySelectorAll("#table tr");
const cardImg = document.getElementById("card-img");
const defaultImg = cardImg.src;
const cardCaption = document.getElementById("card-caption");
const defaultCaption = cardCaption.textContent;



/*** PROJECT TABLE ***/

// clear existing rows
tableBody.innerHTML="";

projects.forEach(project => {
  
  const tr = document.createElement("tr");
  
  const tdTitle = document.createElement("td");
  if (project.link) {
    const a = document.createElement("a");
    a.href = project.link;
    a.textContent = project.title;
    a.target = "_blank";
    tdTitle.appendChild(a);
  }
  else {
    tdTitle.textContent = project.title;
  }
  
  const tdFocus = document.createElement("td");
  tdFocus.textContent = project.focus;
  
  const tdDesc = document.createElement("td");
  tdDesc.textContent = project.description;
  
  tr.appendChild(tdTitle);
  tr.appendChild(tdFocus);
  tr.appendChild(tdDesc);
  
  tableBody.appendChild(tr);
  
  
  // hover image events
  tr.addEventListener("mouseenter", () => {
    cardImg.src = project.image || defaultImg;
    cardCaption.textContent = project.title;
  });
  tr.addEventListener("mouseleave", () => {
    cardImg.src = defaultImg;
  });
});
























