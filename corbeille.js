(function () {
  studentsTable.innerHTML = filteredStudents
    .map(
      (student) => `
  <tr class="line">
       <td class="bloc">
           <div class="col-bas">
               <img src=${student.profil} width="30px" />
           </div>
       </td>
       <td class="bloc">
           <div class="col-bas" style="color: rgb(29, 109, 29)">
           ${student.nom}
           </div>
       </td>

       <td class="bloc">
           <div class="col-bas" style="color: rgb(29, 109, 29)">
               ${student.prenom}
           </div>
       </td>'

       <td class="bloc">
           <div class="col-bas email">${student.email}</div>
        </td>

        <td class="bloc">
        <div class="col-bas">${student.genre}</div>
      </td>

      <td class="bloc">
           <div class="col-bas">${student.phone}</div>
       </td>

       <td class="bloc">
           <div class="col-bas">${student.referentiel}</div>
       </td>

       <td class="bloc">
       <div class="col-haut"></div>
       <input type="checkbox" id="my-checkbox-0" />
       <label for="my-checkbox-0"></label>
     </td>

   </tr>

  `
    )
    .join(" ");
})();

// FONCTION POUR PAGINER EN ARRIÈRE:
function paginePast() {
  if (runningPage > 0) {
    runningPage--;
    displayStudents(runningPage);
  }
}
// FONCTION POUR PAGINER EN AVANT:
function pagineNext() {
  const lastPage = Math.ceil(studentsTab.length / elementByPage) - 1;
  if (runningPage < lastPage) {
    runningPage++;
    displayStudents(runningPage);
  }
}

paginePast.addEventListener("click", paginePast());
pagineNext.addEventListener("click", pagineNext());
// APPEL DE LA FONCTION D'AFFICHAGE DE BASE DES ETUDIANTS:
displayStudents(runningPage);
studentsTable.innerHTML = studentsShow.map(
  (student) => `
          <tr class="line" id=${student.id}>
           <td class="bloc">
               <div class="col-bas">
                   <img src=${student.profil} width="30px" />
               </div>
           </td>
           `
);
// FONCTION POUR PAGINER EN ARRIÈRE:
function paginePast() {
  if (runningPage > 0) {
    runningPage--;
    displayStudents(runningPage);
  }
}
// FONCTION POUR PAGINER EN AVANT:
function pagineNext() {
  const lastPage = Math.ceil(studentsTab.length / elementByPage) - 1;
  if (runningPage < lastPage) {
    runningPage++;
    displayStudents(runningPage);
  }
}

paginePast.addEventListener("click", paginePast());
pagineNext.addEventListener("click", pagineNext());
// APPEL DE LA FONCTION D'AFFICHAGE DE BASE DES ETUDIANTS:
displayStudents(runningPage);

// tr class="line">
//                     <td class="bloc">
//                       <div class="col-bas">
//                         <img src="assets/img/icone.png" width="30px" />
//                       </div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas" style="color: rgb(29, 109, 29)">
//                         sow
//                       </div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas" style="color: rgb(29, 109, 29)">
//                         bobo
//                       </div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas email">s@g.com</div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas">M</div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas">770552626</div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas">DEV</div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-haut"></div>
//                       <input type="checkbox" id="my-checkbox-0" />
//                       <label for="my-checkbox-0"></label>
//                     </td>
//                   </tr>

//                   <tr class="line">
//                     <td class="bloc">
//                       <div class="col-bas">
//                         <img src="assets/img/icone.png" width="30px" />
//                       </div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas" style="color: rgb(29, 109, 29)">
//                         sow
//                       </div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas" style="color: rgb(29, 109, 29)">
//                         bobo
//                       </div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas email">s@g.com</div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas">M</div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas">770552626</div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-bas">DEV</div>
//                     </td>
//                     <td class="bloc">
//                       <div class="col-haut"></div>
//                       <input type="checkbox" id="my-checkbox-0" />
//                       <label for="my-checkbox-0"></label>
//                     </td>
//                   </tr>
