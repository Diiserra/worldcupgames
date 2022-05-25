import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HeaderBarComponent from "./components/HeaderBarComponent";
import GroupsPage from "./pages/GroupsPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import TablePage from "./pages/TablePage";


export default function App() {

  return (
    <Router>
      <HeaderBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/grupos" element={<GroupsPage />}/>
        <Route path="/tabela" element={<TablePage />}/>
        <Route path="/noticias" element={<NewsPage />}/>
      </Routes>
    </Router>
  )
}

