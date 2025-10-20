export function EmailVerificationRequest({ email }) {
  fetch(`http://192.168.0.197:8080/email_verification`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
    })
  })
    .then(res => {
      console.log("Status:", res.status);
      //return res.json();
    })
}