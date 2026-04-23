import axios from "axios";
import { useState } from "react";
export default function LoginSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("無");
  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    if (!username || !password) {
      alert("請輸入帳戶和密碼");
    }
    try {
      const response = await axios.post("/api/getUsers", {
        username: username,
        password: password,
      });
      setContent(response.data.message);
    } catch (error: any) {
      setContent(error.response.data.message);
    }
  };
  return (
    <section className="d-flex justify-content-center align-items-center custom-login-section">
      <form className="col-6 h-50" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="輸入帳戶"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="輸入密碼"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">登入</button>
        <div>{content}</div>
      </form>
    </section>
  );
}
