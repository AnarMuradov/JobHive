export const Login = async (data) => {
    await fetch("http://localhost:3000/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(data);
  };