/*
author: allison r. 
date last modified: feb 14, 2026
*/



const tableBody = document.querySelector(".responsive-table tbody");

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
  
  
});