import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {

  const [theme, setTheme] = useState(false)

  const handleToggle = () => {
    setTheme(prevTheme => !prevTheme)
    localStorage.setItem("colorTheme", JSON.stringify(!theme))
    console.log(theme)
  }

  useEffect(() => {
    let  getTheme = localStorage.getItem("colorTheme") === null ? theme : JSON.parse(localStorage.getItem("colorTheme"))

    setTheme(getTheme)
  }, [])

  return (
    <div className={theme ? "appLight" : "appDark"}>
      <Header
        theme={theme}
        handleToggle={handleToggle}
      />
      <MainContent
        theme={theme}
      />
    </div>
  );
}

export default App;
