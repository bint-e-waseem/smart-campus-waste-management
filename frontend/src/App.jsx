import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route 
              path="/bins" 
              element={
                <div className="p-6 max-w-7xl mx-auto">
                  <h1 className="text-2xl font-bold text-slate-800">Smart Bins Status</h1>
                </div>
              } 
            />
            <Route 
              path="/analytics" 
              element={
                <div className="p-6 max-w-7xl mx-auto">
                  <h1 className="text-2xl font-bold text-slate-800">Campus Analytics</h1>
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
