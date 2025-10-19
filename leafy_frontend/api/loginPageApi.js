export function LoginRequest({ username, password }) {
  fetch(`http://192.168.0.197:8080/login_page`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    })
  })
    .then(res => {
      console.log("Status:", res.status);
      return res.json();
    })
    .then(data => {
    }).catch(err => console.error('Fetch error:', err));
}