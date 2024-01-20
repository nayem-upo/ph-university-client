import MainLayout from "./components/laytout/MainLayout"
import ProtectedRoute from "./components/laytout/ProtectedRoute"

function App() {
  return (<ProtectedRoute><MainLayout /></ProtectedRoute>)
}

export default App
