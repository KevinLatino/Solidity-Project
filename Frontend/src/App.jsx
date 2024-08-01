import MainArticle from './Articles/MainArticle'
import { MyProvider } from './context/Context'


function App() {

  return (
    <MyProvider>
      <MainArticle />
    </MyProvider>
  )
}

export default App
