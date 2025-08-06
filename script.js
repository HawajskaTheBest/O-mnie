
const birthDate = new Date("2005-08-31");

function calculateAge(birth) {
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();

  const hasHadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hasHadBirthday) {
    age--;
  }

  return age;
}

document.getElementById("age").textContent = calculateAge(birthDate);


const months = [
  "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
  "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
];

const day = birthDate.getDate();
const monthName = months[birthDate.getMonth()];
const year = birthDate.getFullYear();

document.getElementById("birthdate").textContent = `${day} ${monthName} ${year}`;
