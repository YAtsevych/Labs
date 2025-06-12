import './App.css'
import MyHobbyClass from './components/MyHobbyClass'
import MyHobbyFunction from './components/MyHobbyFunction'

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MyHobbyClass />
        <MyHobbyFunction />
      </header>
    </div>
  )
}

export default App
