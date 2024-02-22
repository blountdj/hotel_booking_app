import Layout from "./layouts/Layout"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home Page</p>
        </Layout>}/>
        <Route path="/search" element={<Layout>
          <p>Search Page</p>
        </Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <h1 className="text-lg font-medium">test</h1>
    </Router>
  )
}

export default App
