import './App.css'
import Title from './components/Title'
import MainSection from './components/MainSection'
import IntroSection from './components/IntroSection'
function App() {
  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <MainSection />
        <IntroSection imgUrl = "/images/檸檬茶.jpg" content="今天我" reverse={true}/>
        <IntroSection imgUrl = "/images/西多士.jpg" content="寒夜"/>
      </main>
      <footer></footer>
    </>
  )
}

export default App
