
export function RegistrationRequest({ firstName, lastName, username, email, password }) {
  if (password === confirmPassword) {
    fetch(`http://3.77.77.51:8080/register_new_user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
      })
    })
      .then(res => {
        console.log("Status:", res.status);
        //return res.json();
      })
  }
}