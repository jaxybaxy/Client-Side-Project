let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwNzgyNTM3NSwiZXhwIjoxNzA3ODI4OTc1fQ.3MXSKihIXDUgEKhosK9TTXC7JTn9KzU5XD16Z4tY4-Y";

const userFetchedData = async (token) => {
  try {
    const data = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  } catch (err) {
    console.error(err);
  }
};
document.addEventListener("DOMContentLoaded", async function () {
  let userData = await userFetchedData(token);
console.log(userData);
  document.getElementById(
    "name"
  ).textContent = `${userData.firstName} ${userData.lastName}`;
  document.getElementById("user-image").src = userData.image;
  document.getElementById("age").textContent = userData.age;
  document.getElementById("gender").textContent = userData.gender;
  document.getElementById("email").textContent = userData.email;
  document.getElementById("phone").textContent = userData.phone;
  document.getElementById("username").textContent = userData.username;
  document.getElementById("password").textContent = userData.password;
  document.getElementById("birthdate").textContent = userData.birthDate;
});
