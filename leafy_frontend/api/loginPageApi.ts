export async function LoginRequest({ email, password, navigation }: any) {
  try {
    const res = await fetch(`http://192.168.0.197:8080/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      })
    });

    const data = await res.json();

    if (data.code === 200) {
      navigation.navigate("HomePageScreen");
    }

    if (data.code === 403) {
      navigation.navigate("Error500Screen");
    }
  } catch { }
}