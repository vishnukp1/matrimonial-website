
import { Route, Routes } from "react-router-dom";
import TableView from './components/TableView';
import UserCard from './components/UserCard';
import "./App.css"

function App() {
  return (
    <div className="App">
   <Routes>
          
          <Route exact path="/" element={<TableView />} />
          <Route exact path="/profile/:userId" element={<UserCard />} />
          </Routes>
    </div>
  );
}

export default App;
