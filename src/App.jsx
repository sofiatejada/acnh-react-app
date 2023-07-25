import { Route, Routes } from 'react-router-dom';
import './App.css';
import VillagerList from './components/VillagerList';
import VillagerDetail from './components/VillagerDetail';

function App() {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<VillagerList />}
            />
            <Route
                exact
                path="/:id"
                element={<VillagerDetail />}
            />
        </Routes>
    );
}

export default App;
