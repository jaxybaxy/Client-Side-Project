const redirectToLogin = () => {
  try {
    window.location.href = "login.html";
  } catch (error) {
    console.error(err);
  }
};

const userFetchedData = async (token) => {
  try {
    const data = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.status === 200) {
      return data.json();
    } else {
      redirectToLogin();
    }
  } catch (err) {
    console.error(err);
  }
};

const localStorageDataValidation = async () => {
  const data = await localStorage.getItem("data");
  if (data) return await JSON.parse(data);
  else return await redirectToLogin();
};

// const loadProfileContent = async (userData) => {
//   document.getElementById(
//     "name"
//   ).textContent = `${userData.firstName} ${userData.lastName}`;
//   document.getElementById("user-image").src = userData.image;
//   document.getElementById("age").textContent = userData.age;
//   document.getElementById("gender").textContent = userData.gender;
//   document.getElementById("email").textContent = userData.email;
//   document.getElementById("phone").textContent = userData.phone;
//   document.getElementById("username").textContent = userData.username;
//   document.getElementById("height").textContent = userData.height;
//   document.getElementById("weight").textContent = userData.weight;
//   document.getElementById("birthdate").textContent = userData.birthDate;
// };

const loadProfileContent = async (userData) => {
  const profileContainer = document.createElement("div");
  profileContainer.className = "profile-container";

  const profileHeader = document.createElement("div");
  profileHeader.className = "profile-header";
  const profileHeaderTitle = document.createElement("h1");
  profileHeaderTitle.textContent = "MANAGE MY ACCOUNT";
  profileHeader.appendChild(profileHeaderTitle);

  const inProfileContainer = document.createElement("div");
  inProfileContainer.className = "in-profile-container";

  const profileImageContainer = document.createElement("div");
  profileImageContainer.className = "profile-image";

  const breadcrumb = document.getElementById("return-home");
  profileContainer.appendChild(breadcrumb);

  const userImage = document.createElement("img");
  userImage.id = "user-image";
  userImage.src = userData.image;
  userImage.alt = "User Image";
  profileImageContainer.appendChild(userImage);

  const profileDetailsContainer = document.createElement("div");
  profileDetailsContainer.className = "profile-details";

  const details = [
    { label: "Username", id: "username", value: userData.username },
    { label: "Email", id: "email", value: userData.email },
    {
      label: "Name",
      id: "name",
      value: `${userData.firstName} ${userData.lastName}`,
    },
    { label: "Phone", id: "phone", value: userData.phone },
    { label: "Age", id: "age", value: userData.age },
    { label: "Gender", id: "gender", value: userData.gender },
    { label: "Height", id: "height", value: userData.height },
    { label: "Weight", id: "weight", value: userData.weight },
    { label: "Birth Date", id: "birthdate", value: userData.birthDate },
  ];

  details.forEach((detail) => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${detail.label}: `;
    const span = document.createElement("span");
    span.id = detail.id;
    span.textContent = detail.value;
    p.appendChild(strong);
    p.appendChild(span);
    profileDetailsContainer.appendChild(p);
  });

  const logoutButtonContainer = document.createElement("div");
  logoutButtonContainer.className = "logout_up";
  const logoutButton = document.createElement("button");
  logoutButton.className = "logout";
  logoutButton.textContent = "Logout";
  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("data");
    redirectToLogin();
  });
  logoutButtonContainer.appendChild(logoutButton);

  inProfileContainer.appendChild(profileImageContainer);
  inProfileContainer.appendChild(profileDetailsContainer);
  profileDetailsContainer.appendChild(logoutButtonContainer);

  profileContainer.appendChild(profileHeader);
  profileContainer.appendChild(inProfileContainer);

  // document.body.appendChild(profileContainer);

  // Add profile container after navbar and before footer
  const navbar = document.getElementById("first-nav");
  const mainContainer = document.getElementById("main-container");
  const footer = document.getElementsByClassName("footer")[0];
  // navbar.insertAdjacentElement("afterend", profileContainer);
  mainContainer.appendChild(profileContainer);
  // Add padding to the top of the body to offset the fixed navbar
  // const navbarHeight = navbar.offsetHeight;
  // document.body.style.paddingTop = navbarHeight + "px";
};

const main = async () => {
  const data = await localStorageDataValidation();
  const userData = await userFetchedData(data.token);
  await loadProfileContent(userData);
};
main();
