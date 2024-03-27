import './App.css'
import dotenv from 'dotenv';
dotenv.config();
function App() {
  //const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <h1>Spotify Blindtest</h1>
        <a href={`https://accounts.spotify.com/authorize/?client_id=${Bun.env.CLIENT_ID}&redirect_uri=${Bun.env.REDIRECT_URI}&response_type=token`}>Login to Spotify</a>
      </header>
    </main>
  )
}

export default App
