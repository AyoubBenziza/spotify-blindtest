import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <h1>Spotify Blindtest</h1>
        <a href={`https://accounts.spotify.com/authorize/?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=token`}>Login to Spotify</a>
      </header>
    </main>
  )
}

export default App
