// GESTION DE LA NAVIGATION DE SINGLE PAGE:
const linkPromos = document.querySelector(".linkToPromos");
const linkStudents = document.querySelector(".linkToStudents");
const studentsContainer = document.querySelector(".container-table");
const promosContainer = document.querySelector(".promosContainer-table");
const apprenantsButtons = document.getElementById("apprenantsButtons");
const fileImg = document.querySelector(".fileImg");
const studentSearchForm = document.querySelector(".studentSearchForm");

// contenu: ligne 177 à 268 nomClass = content(contenu global);
// contenu du tableau students: 219 à 260 nomClass = container-table
// contenu du tableau promos: 264 à 336 nomClass = promosContainer-table
// contenu boutons options apprenants:

linkPromos.addEventListener("click", () => {
  studentsContainer.style.display = "none";
  apprenantsButtons.style.display = "none";
  promosContainer.style.display = "block";
  fileImg.style.display = "none";
  studentSearchForm.style.display = "none";
});
linkStudents.addEventListener("click", () => {
  studentsContainer.style.display = "block";
  apprenantsButtons.style.display = "block";
  promosContainer.style.display = "none";
  fileImg.style.display = "block";
  studentSearchForm.style.display = "block";
});

// BOUTON AJOUT:
const boutonNew = document.querySelector(".btn-hover");
// BOITE LISTE APPRENANTS
const studentsTable = document.querySelector(".studentsTable");
// ADDING STUDENT FORM:
const addStudentForm = document.querySelector(".modal-content");

// CHAMPS DE SAISI:
const inputs = document.querySelectorAll("input[type=text]");
const selects = document.querySelectorAll("select");

// LES CHAMPS D'ERREURS:
let errors = document.querySelectorAll(".error");
errors.forEach((err) => {
  err.style.color = "tomato";
  err.style.visibility = "hidden";
});

// LE BOUTON SUIVANT POUR VALIDATION:
nextStep = document.querySelector(".nextStep");

// NEW STUDENT VARIABLES:
let studProfil = document.getElementById("image");
let studName = document.getElementById("nom");
let studPrenom = document.getElementById("prenom");
let studEmail = document.getElementById("email");
let studPhone = document.getElementById("telephone");
let studGenre = document.getElementById("sexe");
let studNaiss = document.getElementById("dateNaissance");
let studLieu = document.getElementById("lieu_naissance");
let studCard = document.getElementById("cni");
let studRef = document.getElementById("studentRef");
let studPromo = document.getElementById("studentPromo");

// FONCTION POUR MASQUER LE BOUTON SUIVANT SI UN CHAMP EST VIDE
function visibilityCondition(arg) {
  if (arg.value === "") {
    nextStep.style.visibility = "hidden";
    nextStep.style.pointerEvents = "none";
  } else {
    nextStep.style.visibility = "visible";
    nextStep.style.pointerEvents = "auto";
  }
}

visibilityCondition(
  studProfil,
  studName,
  studPrenom,
  studEmail,
  studPhone,
  studGenre,
  studNaiss,
  studLieu,
  studCard,
  studRef,
  studPromo
);

let validProfil,
  validNom,
  validPrenom,
  validEmail,
  validGenre,
  validPhone,
  validRef,
  validDateNaiss,
  validLieuNaiss,
  validCni;

const profilCheck = (val) => {
  const validLink = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  const profilErr = document.getElementById("profilError");
  if (!val.match(validLink)) {
    profilErr.style.visibility = "visible";
    profilErr.textContent = "Fichier photo invalide";
    nextStep.style.visibility = "hidden";
    validProfil = null;
  } else {
    profilErr.style.visibility = "hidden";
    profilErr.textContent = "";
    nextStep.style.visibility = "visible";
    validProfil = val;
  }
};

const nameCheck = (val) => {
  const nameErr = document.getElementById("nomError");
  if (val.length < 3) {
    nameErr.style.visibility = "visible";
    nameErr.textContent = "Non invalide 3 caractères au moins";
    nextStep.style.visibility = "hidden";
    validNom = null;
  } else {
    nameErr.style.visibility = "hidden";
    nameErr.textContent = "";
    nextStep.style.visibility = "visible";
    validNom = val;
  }
};

const prenomCheck = (val) => {
  const prenomErr = document.getElementById("prenomError");
  if (val.length < 3) {
    prenomErr.style.visibility = "visible";
    prenomErr.textContent = "Non invalide 3 caractères au moins";
    nextStep.style.visibility = "hidden";
    validPrenom = null;
  } else {
    prenomErr.style.visibility = "hidden";
    prenomErr.textContent = "";
    nextStep.style.visibility = "visible";
    validPrenom = val;
  }
};

const emailCheck = (val) => {
  const emailErr = document.getElementById("emailError");
  if (!val.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    emailErr.style.visibility = "visible";
    emailErr.textContent = "Email invalide";
    nextStep.style.visibility = "hidden";
    validEmail = null;
  } else {
    emailErr.style.visibility = "hidden";
    emailErr.textContent = "";
    nextStep.style.visibility = "visible";
    validEmail = val;
  }
};

const genreCheck = (val) => {
  const genreErr = document.getElementById("genreError");
  if (val.length <= 0) {
    genreErr.style.visibility = "visible";
    genreErr.textContent = "Genre invalide";
    nextStep.style.visibility = "hidden";
    validGenre = null;
  } else {
    genreErr.style.visibility = "hidden";
    genreErr.textContent = "";
    nextStep.style.visibility = "visible";
    validGenre = val;
  }
};

const lieuNaissCheck = (val) => {
  const lieuNaissError = document.getElementById("lieuError");
  if (val.length < 3) {
    lieuNaissError.style.visibility = "visible";
    lieuNaissError.textContent = "Champ invalide. Entrez données valides";
    nextStep.style.visibility = "hidden";
    validLieuNaiss = null;
  } else {
    lieuNaissError.style.visibility = "hidden";
    lieuNaissError.textContent = "";
    nextStep.style.visibility = "visible";
    validLieuNaiss = val;
  }
};

const phoneCheck = (val) => {
  // const = (/^\d{9}$/);
  const phoneErr = document.getElementById("phoneError");
  if (!val.match(/^\d{9}$/)) {
    phoneErr.style.visibility = "visible";
    phoneErr.textContent = "doit faire 9 chiffres";
    nextStep.style.visibility = "hidden";
    validPhone = null;
  }
  //
  else {
    phoneErr.style.visibility = "hidden";
    phoneErr.textContent = "";
    nextStep.style.visibility = "visible";
    validPhone = val;
  }
};

const cniCheck = (val) => {
  const cniErr = document.getElementById("cniError");
  if (!val.match(/^\d{12}$/)) {
    cniErr.style.visibility = "visible";
    cniErr.textContent = "doit faire 12 chiffres";
    nextStep.style.visibility = "hidden";
    validCni = null;
  }
  //
  else {
    cniErr.style.visibility = "hidden";
    cniErr.textContent = "";
    nextStep.style.visibility = "visible";
    validCni = val;
  }
};

const refCheck = (val) => {
  const refErr = document.getElementById("refError");
  if (val.length == "") {
    refErr.style.visibility = "visible";
    refErr.textContent = "Référentiel invalide";
    nextStep.style.visibility = "hidden";
    validRef = null;
  } else {
    refErr.style.visibility = "hidden";
    refErr.textContent = "";
    nextStep.style.visibility = "visible";
    validRef = val;
  }
};

function dateParser(val) {
  let newDate = new Date(val).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return newDate;
}

function isMinor(option) {
  convertOption = new Date(option);
  let firstDate = convertOption.getFullYear();
  actual = new Date();
  secondeDate = actual.getFullYear();
  if (secondeDate - firstDate >= 30) {
    return true;
  } else {
    return false;
  }
}

const dateNaissCheck = (val) => {
  var regexDate = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/;
  const dateNaissError = document.getElementById("dateNaissanceError");
  if ((val.value = "")) {
    dateNaissError.style.visibility = "visible";
    dateNaissError.textContent = "Champ vide. Entrez données valides";
    nextStep.style.visibility = "hidden";
    validDateNaiss = null;
  } else if (!val.match(regexDate)) {
    dateNaissError.style.visibility = "visible";
    dateNaissError.textContent = "Format date invalide. Entrez Jour/Mois/Année";
    nextStep.style.visibility = "hidden";
    validDateNaiss = null;
  } else if (isMinor(val)) {
    dateNaissError.style.visibility = "visible";
    dateNaissError.textContent = "L'âge max est de 30 ans";
    nextStep.style.visibility = "hidden";
    validDateNaiss = null;
  }
  //
  else {
    dateNaissError.style.visibility = "hidden";
    dateNaissError.textContent = "";
    nextStep.style.visibility = "visible";
    validDateNaiss = val;
  }
};

// PREVIEW IMAGE:
let previewImage = document.getElementById("studentImage");
studProfil.addEventListener("input", (e) => {
  previewImage.src = studProfil.value;
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "image":
        profilCheck(e.target.value);
        break;

      case "email":
        emailCheck(e.target.value);
        break;

      case "nom":
        nameCheck(e.target.value);
        break;

      case "prenom":
        prenomCheck(e.target.value);
        break;
      case "telephone":
        phoneCheck(e.target.value);
        break;
      case "cni":
        cniCheck(e.target.value);
      case "dateNaissance": {
        dateNaissCheck(e.target.value);
      }
      case "studentRef": {
        refCheck(e.target.value);
      }
      case "sexe": {
        genreCheck(e.target.value);
      }
      case "lieu_naissance": {
        lieuNaissCheck(e.target.value);
      }

      default:
        null;
    }
  });
});

const addStudent = () => {
  let randomId = Math.floor(Math.random(5000) * 500);

  if (
    // validProfil != null &&
    validNom != null &&
    validPrenom != null &&
    validEmail != null &&
    // && validPhone != null
    validRef != null &&
    // && validCni != null
    validLieuNaiss != null &&
    validGenre != null &&
    validDateNaiss != null
  ) {
    newStudent = {
      id: randomId,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: studName.value,
      prenom: studPrenom.value,
      email: studEmail.value,
      phone: studPhone.value,
      genre: studGenre.value,
      dateNaiss: studNaiss.value,
      lieuNaiss: studLieu.value,
      numCNI: studCard.value,
      referentiel: studRef.value,
      promo: studPromo.value,
    };
    dataStorage.students.push(newStudent);
    window.history.back();
  } else {
    alert("Vérifiez les infos saisies");
    console.log("Des données invalides");
  }
};

// BASE DE DONNÉES:
let dataStorage = {
  students: [
    {
      id: 33,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "diop",
      prenom: "mamadou",
      email: "mamadou@gmail.com",
      phone: 772373733,
      genre: "M",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Web",
      promo: 1,
    },
    {
      id: 762,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "diop",
      prenom: "ramadou",
      email: "rama@gmail.com",
      phone: 771272790,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Web",
      promo: 1,
    },
    {
      id: 365,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "fall",
      prenom: "salimata",
      email: "sali@gmail.com",
      phone: 70672290,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Ref-dig",
      promo: 1,
    },
    {
      id: 366,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "fall",
      prenom: "ramata",
      email: "ram@gmail.com",
      phone: 70672290,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Ref-dig",
      promo: 1,
    },
    {
      id: 901,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "pala",
      prenom: "mbaye",
      email: "pala@gmail.com",
      phone: 762293622,
      genre: "M",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Data",
      promo: 1,
    },
    {
      id: 33,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "diop",
      prenom: "mamadou",
      email: "mamadou@gmail.com",
      phone: 772373733,
      genre: "M",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Web",
      promo: 1,
    },
    {
      id: 367,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "diop",
      prenom: "ramadou",
      email: "rama@gmail.com",
      phone: 771272790,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Web",
      promo: 1,
    },
    {
      id: 223,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "fall",
      prenom: "salimata",
      email: "sali@gmail.com",
      phone: 70672290,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Ref-dig",
      promo: 1,
    },
    {
      id: 366,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "fall",
      prenom: "ramata",
      email: "ram@gmail.com",
      phone: 70672290,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Ref-dig",
      promo: 1,
    },
    {
      id: 20,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "pala",
      prenom: "mbaye",
      email: "pala@gmail.com",
      phone: 762293622,
      genre: "M",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Data",
      promo: 1,
    },
    {
      id: 333,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "diop",
      prenom: "mamadou",
      email: "mamadou@gmail.com",
      phone: 772373733,
      genre: "M",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Web",
      promo: 1,
    },
    {
      id: 672,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "diop",
      prenom: "ramadou",
      email: "rama@gmail.com",
      phone: 771272790,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Web",
      promo: 1,
    },
    {
      id: 322,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "fall",
      prenom: "salimata",
      email: "sali@gmail.com",
      phone: 70672290,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Ref-dig",
      promo: 1,
    },
    {
      id: 636,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "fall",
      prenom: "ramata",
      email: "ram@gmail.com",
      phone: 70672290,
      genre: "F",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Ref-dig",
      promo: 1,
    },
    {
      id: 20,
      profil: "https://cdn-icons-png.flaticon.com/128/949/949725.png",
      nom: "pala",
      prenom: "mbaye",
      email: "pala@gmail.com",
      phone: 762293622,
      genre: "M",
      dateNaiss: "10/01/2000",
      lieuNaiss: "Dakar",
      numCNI: 123456717834,
      referentiel: "Dev-Data",
      promo: 1,
    },
  ],
};
let studentsTab = dataStorage.students;

// FONCTION DE RECHERCHE ETUDIANT:
const searchForm = document.querySelector(".studentSearchForm");
let searchedStudent = document.getElementById("studentSearche");
(function () {
  searchedStudent.addEventListener("input", () => {
    const searchedValue = searchedStudent.value.toLowerCase().trim();
    const filteredStudents =
      searchedValue !== "" && searchedValue.length >= 2
        ? studentsTab.filter((student) =>
            student.prenom.toLowerCase().includes(searchedValue)
          )
        : studentsTab;

    studentsTable.innerHTML = filteredStudents
      .map(
        (student) => `
      <tr class="line" id=${student.id}>
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

         <td class="bloc">
           <button class="modif" id=${student.id}>Modifier</button>
           </td>

       </tr>
    
      `
      )
      .join(" ");
  });
})();

const nextPage = document.getElementById("pagineNext");
const pastPage = document.getElementById("pagineBack");
back = document.querySelector(".prev");
document
  .querySelector(".next")
  .addEventListener("click", (e) => e.preventDefault());
document
  .querySelector(".prev")
  .addEventListener("click", (e) => e.preventDefault());

// AFFICHAGE DES ÉTUDIANTS AVEC PAGINATION:
const elementByPage = 6;
let runningPage = 0;
const displayStudents = (pageNumber) => {
  const firstIndex = pageNumber * elementByPage;
  const lastIndex = firstIndex + elementByPage;
  const studentShow = studentsTab.slice(firstIndex, lastIndex);

  // studentsTable.innerHTML = studentShow
  studentsTable.innerHTML = studentShow
    .map(
      (student) => `
          <tr class="line" id=${student.id}>
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

           <td class="bloc">
           <button class="modif" id=${student.id}>Modifier</button>
           <button class="scan" id=${student.id}>Scan</button>
           </td>

                  
           </tr>    
           `
      //  <label for="modif">/label>
    )
    .join(" ");
};

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

pastPage.addEventListener("click", paginePast);
nextPage.addEventListener("click", pagineNext);
// APPEL DE LA FONCTION D'AFFICHAGE DE BASE DES ETUDIANTS:
displayStudents(runningPage);

// VARIABLE POUR SAVOIR SI CREATION OU MODIFICATION:
let updating = false;
let studentUpdating;

//----------------------MODIFICATIONS DONNÉES ETUDIANT:
const modifStudent = document.querySelectorAll(".modif");
const validAdd = document.getElementById("validAdd");
let studentIndex;
modifStudent.forEach((modif) => {
  modif.addEventListener("click", function (e) {
    updating = true;
    window.location.href = `#popup`;
    nextStep.style.visibility = "visible";
    studentsTab.forEach((student) => {
      if (student.id == e.target.id) {
        studentUpdating = student;
        studentIndex = studentsTab.findIndex(
          (student) => student.id == e.target.id
        );
      }
      previewImage.src = studentUpdating.profil;
      studProfil.value = studentUpdating.profil;
      studName.value = studentUpdating.nom;
      studPrenom.value = studentUpdating.prenom;
      studEmail.value = studentUpdating.email;
      studPhone.value = studentUpdating.phone;
      studGenre.value = studentUpdating.genre;
      studNaiss.value = studentUpdating.dateNaiss;
      studLieu.value = studentUpdating.lieuNaiss;
      studCard.value = studentUpdating.numCNI;
      studRef.value = studentUpdating.referentiel;
      studPromo.value = studentUpdating.promo;
      //
      // studentsTab[studentIndex] = studentUpdating;
      // console.log(studentsTab[studentIndex]);
    });
  });
});
function saveUpdate() {
  studentsTab[studentIndex].nom = studName.value;
  studentsTab[studentIndex].prenom = studPrenom.value;
  studentsTab[studentIndex].email = studEmail.value;
  studentsTab[studentIndex].phone = studPhone.value;
  studentsTab[studentIndex].genre = studGenre.value;
  studentsTab[studentIndex].dateNaiss = studNaiss.value;
  studentsTab[studentIndex].lieuNaiss = studLieu.value;
  studentsTab[studentIndex].numCNI = studCard.value;
  studentsTab[studentIndex].referentiel = studRef.value;
  studentsTab[studentIndex].promo = studPromo.value;

  console.log(studentsTab);
}

// DÉCLANCHEMENT CREATION OU MODIFICATION ETUDIANT:
addStudentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!updating) {
    addStudent();
  } else {
    saveUpdate();
  }
});

// GESTION DE QR CODE:
const scanBtn = document.querySelectorAll(".scan");
const scanBox = document.querySelector(".scanBox");
const closeScanBox = document.querySelector(".closeScan");
closeScanBox.addEventListener("click", () => {
  scanBox.style.display = "none";
});

// previewImage.src = studProfil.value;
let scannedStudent;
const scannedStudentName = document.querySelector(".scannedStudentName");
const scannedStudentPicture = document.querySelector(".scannedStudentPicture");
const codeQrZone = document.querySelector(".codeQrZone");

(function () {
  scanBtn.forEach((scan) => {
    scan.addEventListener("click", (e) => {
      window.location.href = `#scanBox`;
      scanBox.style.display = "block";
      studentsTab.forEach((student) => {
        if (student.id == e.target.id) {
          scannedStudent = student;
          scannedStudentName.textContent = `APPRENANT: ${scannedStudent.prenom} ${scannedStudent.nom}`;
          scannedStudentPicture.src = scannedStudent.profil;
          const qr = qrcode(0, "L");
          qr.addData(`${scannedStudent.phone}`);
          qr.make();
          const qrImage = qr.createImgTag();
          codeQrZone.innerHTML = qrImage;
        }
      });
    });
  });
})();

//----------------------------------------PAGE PROMOS
const promosTab = {
  promos: [
    {
      id: 1,
      libelle: "Promo 1",
      dateDebut: "21-01-2019",
      dateFin: "21-01-2020",
    },
    {
      id: 2,
      libelle: "Promo 2",
      dateDebut: "21-01-2020",
      dateFin: "21-01-2021",
    },
    {
      id: 3,
      libelle: "Promo 3",
      dateDebut: "21-01-2021",
      dateFin: "21-01-2022",
    },
  ],
};

function generatePromo(prom) {
  return `
  <tr class="line">
      <td class="bloc">
        <div class="col-bas" style="color: rgb(29, 109, 29)">
          Promo ${prom.id}
        </div>
      </td>
      <td class="bloc">
                <div class="col-bas" style="color: rgb(29, 109, 29)">
                  ${prom.dateDebut}
                </div>
              </td>
              <td class="bloc">
              <div class="col-bas email">${prom.dateFin}</div>
            </td>
           
            <td class="bloc">
        <div class="col-bas" style="color: rgb(29, 109, 29)">
          <input type="checkbox" id=${prom.id} class="promoCheck">
        </div>
      </td>
    </tr>
  
  `;
}

{
  /* <td class="bloc">
  <div class="col-haut"></div>
  <input type="checkbox" />
  <label for="my-checkbox-0"></label>
</td>; */
}
const promosList = promosTab.promos;
const promosBox = document.querySelector(".promosList");

function updatePromosBox() {
  const promosHTML = promosList.map((prom) => generatePromo(prom)).join("");
  promosBox.innerHTML = promosHTML;
}

updatePromosBox();

//----------------------------------AJOUT DE PROMOS
const popupPromo = document.querySelector(".popupPromo");
const promoForm = document.getElementById("taskForm");
const numberPromoArea = document.querySelector(".promoNumber");
const promoStart = document.querySelector(".dateDebut");
const promoEnd = document.querySelector(".dateFin");

const addPromoPopup = document.querySelector(".popup-content");
const promoNumberError = document.querySelector(".promoNumberError");
const promoStartError = document.querySelector(".promoStartError");
const promoEndError = document.querySelector(".promoEndError");
const promoDurationError = document.querySelector(".promoDurationError");
const inputsAreas = document.querySelectorAll(
  "input[type=text],input[type=number]"
); 

//------TABLEAU DES NUMÉROS PROMOS QUI EXISTE DEJAS:
let idPromoTab = [];
promosList.forEach((promo) => {
  idPromoTab.push(promo.id);
});

//--------FONCTION DE COMPARAISON DE DATES
function differenceMois(date1, date2) {
  const [jour1, mois1, annee1] = date1.split("/").map(Number);
  const [jour2, mois2, annee2] = date2.split("/").map(Number);

  const diffAnnees = annee2 - annee1;
  const diffMois = mois2 - mois1;
  const diffJours = jour2 - jour1;

  return diffAnnees * 12 + diffMois + (diffJours >= 0 ? 0 : -1);
}

let validPromoNumber, validPromoStart, validPromoEnd, validPromoDuration;
let newPromoNumber, newPromoStart, newPromoEnd, newPromoDuration;

const promoNumberControl = () => {
  numberPromoArea.addEventListener("input", (e) => {
    if (e.target.value === "" || numberPromoArea.value <= 0) {
      promoNumberError.style.visibility = "visible";
      promoNumberError.textContent = "Une promo ne peut pas être nulle ou vide";
      validPromoNumber = false;
      newPromoNumber = null;
    }
    //
    else if (idPromoTab.includes(parseInt(e.target.value))) {
      promoNumberError.style.visibility = "visible";
      promoNumberError.textContent = "Cette promo exite dèjas";
      validPromoNumber = false;
      newPromoNumber = null;
      //
    } else {
      promoNumberError.style.visibility = "hidden";
      promoNumberError.textContent = "";
      validPromoNumber = true;
      newPromoNumber = e.target.value;
    }
  });
};

const promoStartControl = () => {
  promoStart.addEventListener("input", (e) => {
    var regexDate =
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (!e.target.value.match(regexDate)) {
      promoStartError.style.visibility = "visible";
      promoStartError.textContent = "Format date invalide. entrez J/M/A";
      validPromoStart = false;
      newPromoStart = null;
    } else {
      promoStartError.style.visibility = "hidden";
      promoStartError.textContent = "";
      validPromoStart = true;
      newPromoStart = e.target.value;
    }
  });
};

const promoEndControl = () => {
  promoEnd.addEventListener("input", (e) => {
    var regexDate =
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (!e.target.value.match(regexDate)) {
      promoEndError.style.visibility = "visible";
      promoEndError.textContent = "Format date invalide. entrez J/M/A";
      validPromoEnd = false;
      newPromoEnd = null;
    } else {
      promoEndError.style.visibility = "hidden";
      promoEndError.textContent = "";
      validPromoEnd = true;
      newPromoEnd = e.target.value;
    }
  });
};

inputsAreas.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "promo":
        promoNumberControl();
      case "date1":
        promoStartControl();
      case "date2": {
        promoEndControl();
      }
      default:
        null;
    }
  });
});

promoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (differenceMois(promoStart.value, promoEnd.value) < 4) {
    promoDurationError.style.visibility = "visible";
    promoDurationError.textContent = "Une promo doit durer 4 mois minimum";
    validPromoDuration = false;
  } else {
    promoDurationError.style.visibility = "hidden";
    promoDurationError.textContent = "";
    validPromoDuration = true;
  }
  if (validPromoNumber == true
      && validPromoStart == true
    && validPromoEnd == true
    && validPromoDuration == true)
  {
    newPromo = {
      id: numberPromoArea.value,
      dateDebut: promoStart.value,
      dateFin: promoEnd.value,
    }
    promosList.push(newPromo);
    updatePromosBox();
    console.log(newPromo);

  } 
  // 
  else {
    alert("Corrigez les champs en rouge");
  }
});

//---------------------------------------- POPUP ADD PROMO
const ouvrirPopup = document.getElementById("openPopup");
const popup = document.getElementById("popupPromo");
const fermerPopup = document.querySelector(".close-btn");

ouvrirPopup.addEventListener("click", () => (popup.style.display = "flex"));

fermerPopup.addEventListener("click", () => (popup.style.display = "none"));

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Taff pour le vendredi :
// 1,créer un bouton transfére(liste deroulante ):
// Pour transferer un apprenant d'un reférentiel à un autre vous procédez comme suit:
// Cocher  les apprenants que vous souhaitez  transférer, puis  sélectionnez le  référentiel  que vous voulez les transférer.
// NB: le référentiel des apprenants sélectionnés pour le transfert  ne doit pas figurer dans la liste déroulent du bouton transfére.

// 2 génération du code qr:
// Cliquez  sur une ligne du tableau,  un popup affiche avec la photo et le code qr  de l'apprenant sur la ligne que vous avez  cliquez. Scanner le code qr  pour obtenir son numéro  de téléphone .

// contenu: ligne 177 à 268 nomClass = content
// contenu du tableau students: 219 à 260 nomClass = container-table
// contenu du tableau promos: 264 à 336 nomClass = container-table
