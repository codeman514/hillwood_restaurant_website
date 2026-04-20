import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Title from './components/Title'
import MainSection from './components/MainSection'
import IntroSection from './components/IntroSection'
import LoginSection from "./components/LoginSection"
function App() {
  return (
    <>
      <Router>
        <header>
          <Title />
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <MainSection />
                <IntroSection imgUrl="/images/檸檬茶.jpg" content="今天我" reverse={true} />
                <IntroSection imgUrl="/images/西多士.jpg" content="寒夜" />
              </>}/>
              <Route path="/login" element={
              <>
                <LoginSection/>
              </>}/>
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </>
  )
}

export default App
