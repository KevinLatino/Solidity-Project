import MainArticle from './Articles/MainArticle'
import { AppProvider } from './context/Context'


function App() {

  return (
    <AppProvider>
      <MainArticle />
    </AppProvider>
  )
}

export default App
