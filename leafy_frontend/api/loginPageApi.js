export function LoginRequest({ email }) {
  fetch(`http://3.65.34.230:8080/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      username: "",
      password: "",
    })
  })
    .then(res => {
      console.log("Status:", res.status);
      //return res.json();
    })
}