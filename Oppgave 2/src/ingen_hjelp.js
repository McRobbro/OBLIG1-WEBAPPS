const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
  ];
  
  // TODO: Hent HTML #id med getElementById

  const userName = document.getElementById("name");
  const userAge = document.getElementById("age");
  const userPrint = document.getElementById("users");
  const btn = document.getElementById("filter");

  // TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
  
const printUsers = (users) => {
    userPrint.innerHTML = null;
    userPrint.innerHTML += `<li><span>ID </span><span>Name </span><span>Age </span></li>`
    users.forEach(user => {
      userPrint.innerHTML += `<li><span>${user.id} </span><span>${user.name} </span><span>${user.age} </span></li>`
    });
}

  // TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket

const handleSearch = () => {
  const nameForSearch = userName.value;
  console.log(nameForSearch);
  if (users.find(user => user.name === nameForSearch)) {
    const userFound = users.filter(user => user.name === nameForSearch);
    if (userFound) {
      printUsers(userFound);
    }
  } else {
    printUsers(users);
  }
}
  // TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret

const handleFilter = () => {
  const ageForFilter = userAge.value;
  console.log(ageForFilter);
  if (users.filter(user => user.age >= Number(ageForFilter))) {
    const userFound = users.filter(user => user.age >= ageForFilter);
    if (userFound.length > 0) {
      printUsers(userFound);
    } else {
      userPrint.innerHTML = "There are no avalible people with this age"
    }
  } else {
    printUsers(users);
  }
}

printUsers(users);

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
  
userName.addEventListener("keyup", handleSearch);

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
  
btn.addEventListener("click", handleFilter);