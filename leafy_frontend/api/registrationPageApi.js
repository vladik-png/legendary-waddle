export function RegistrationRequest({ firstName, lastName, email, password, confirmPassword }) {
  fetch(`http://192.168.0.197:8080/register_new_user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    })
  })
    .then(res => {
      console.log("Status:", res.status);
      return res.json();
    })
    .then(data => {
    }).catch(err => console.error('Fetch error:', err));
}