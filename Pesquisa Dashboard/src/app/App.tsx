import { useState } from 'react';
import Dashboard from './Dashboard';
import heroLogoImage from 'figma:asset/72d9b08afad15dd6d1ecf014c3b58f2eeb402ba9.png';
import { Lock } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Pa$$word@123') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
        <img src={heroLogoImage} alt="Yde Symbol" className="h-20 w-auto mb-8" />
        
        <h1 
          className="text-4xl sm:text-5xl mb-3 text-center"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontWeight: 700,
            color: '#162C46'
          }}
        >
          Controle da Pesquisa YDE
        </h1>
        
        <p 
          className="text-lg mb-12 text-center"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
            opacity: 0.7
          }}
        >
          Área restrita - Acesso por senha
        </p>

        <form onSubmit={handleLogin} className="w-full max-w-md">
          <div className="bg-white p-8 rounded-lg border-2" style={{ borderColor: '#162C46' }}>
            <div className="flex items-center gap-3 mb-6">
              <Lock size={24} style={{ color: '#B8963A' }} />
              <label 
                htmlFor="password"
                className="text-lg font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
              >
                Digite a senha de acesso
              </label>
            </div>
            
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Senha"
              className="w-full px-4 py-3 rounded-lg border-2 mb-4 transition-colors"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                borderColor: error ? '#ef4444' : '#162C46',
                color: '#162C46',
                fontSize: '16px'
              }}
              autoFocus
            />

            {error && (
              <p 
                className="text-sm mb-4"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#ef4444'
                }}
              >
                Senha incorreta. Tente novamente.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg transition-opacity hover:opacity-80"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                backgroundColor: '#B8963A',
                color: '#FFFFFF'
              }}
            >
              Acessar Dashboard
            </button>
          </div>
        </form>
      </div>
    );
  }

  return <Dashboard />;
}