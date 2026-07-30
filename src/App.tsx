import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Title from "./components/Title";
import MainSection from "./components/MainSection";
import LoginSection from "./components/LoginSection";
import RegisterSection from "./components/RegisterSection";
import BookingSection from "./components/BookingSection";
function App() {
  return (
    <>
      <Router>
        <header>
          <Title />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainSection />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <LoginSection />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <RegisterSection />
                </>
              }
            />
            <Route
              path="/booking"
              element={
                <>
                  <BookingSection />
                </>
              }
            />
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </>
  );
}

export default App;
