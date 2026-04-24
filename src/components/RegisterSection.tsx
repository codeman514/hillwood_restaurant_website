import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function RegisterSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [content, setContent] = useState("無");
  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        username,
        password,
        gender,
      });
      setContent(response.data.message);
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
        <div className="col-12 d-flex justify-content-around mb-3">
          性別
          <select
            className="col-3"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">請選擇</option>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="unknown">不公開</option>
          </select>
        </div>
        <div>
          <button type="submit">註冊</button>
          <Link className="custom-nav-link" to="/login">
            已有帳戶?去登入
          </Link>
        </div>
        <div>{content}</div>
      </form>
    </section>
  );
}
