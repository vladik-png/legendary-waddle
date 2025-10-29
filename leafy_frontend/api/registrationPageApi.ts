import { API_URL } from "@/api/API_CONFIG";

export function RegistrationRequest({ firstName, lastName, username, email, password, confirmPassword }: any) {
  if (password === confirmPassword) {
    fetch(`${API_URL}/register_new_user`, {
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
      })
  }
}