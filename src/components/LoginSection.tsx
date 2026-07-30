import axios from "axios";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function LoginSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("無");
  const navigate = useNavigate();
  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    if (!username || !password) {
      alert("請輸入帳戶和密碼");
    }
    try {
      const response = await axios.post("/api/getUsers", {
        username,
        password,
      });
      setContent(response.data.message);
      if(response.data.success)
      {
        navigate("/booking");
      }
    } catch (error: any) {
      setContent(error.response.data.message);
    }
  };
  return (
    <section className="d-flex justify-content-center align-items-center custom-login-section">
      <form
        className="col-3 h-50 d-flex flex-column align-items-center justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="col-12 d-flex justify-content-around mb-3">
          帳戶
          <input
            className="col-3"
            type="text"
            placeholder="輸入帳戶"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="col-12 d-flex justify-content-around mb-3">
          密碼
          <input
            className="col-3"
            type="password"
            placeholder="輸入密碼"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">登入</button>
          <Link className="custom-nav-link" to="/register">
            沒有帳戶?去註冊
          </Link>
        </div>
        <div>{content}</div>
      </form>
    </section>
  );
}
