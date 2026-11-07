import { useState } from 'react';
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', full_name: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login logic baad mein add karenge
        setMessage("Login API pending hai, abhi signup karein.");
      } else {
        const res = await axios.post('http://localhost:8000/api/signup', formData);
        setMessage(`Account ban gaya! Welcome ${res.data.full_name}`);
      }
    } catch (err) {
      setMessage(err.response?.data?.detail || "Koi error aya");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        {message && <p className="text-blue-500 mb-4 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="border p-2 rounded" 
              onChange={(e) => setFormData({...formData, full_name: e.target.value})} required />
          )}
          <input type="email" placeholder="Email" className="border p-2 rounded"
            onChange={(e) => setFormData({...formData, email: e.target.value})} required />
          <input type="password" placeholder="Password" className="border p-2 rounded"
            onChange={(e) => setFormData({...formData, password: e.target.value})} required />
          
          <button type="submit" className="bg-green-600 text-white p-2 rounded mt-2">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm cursor-pointer text-green-600" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign up karein' : 'Login karein'}
        </p>
      </div>
    </div>
  );
}

export default App;