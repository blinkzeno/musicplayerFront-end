import  { useState } from 'react';
import  bg from "../../assets/images/bg.jpg"
import { Link } from 'react-router-dom';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'authentification ici
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen">
      {/* Section gauche : Formulaire */}
      <div className="flex flex-col justify-center w-full max-w-lg p-8 bg-white">
        <div className="mb-6">
          <h2 className="text-3xl text-center font-extrabold text-gray-900">Se connecter</h2>
          <p className="mt-2 text-sm text-gray-600">
            Pas encore de compte?{' '}
            
            <Link to="/inscription" className="font-medium text-orange-600 hover:text-orange-500">
              Inscrivez-vous maintenant
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                Se souvenir de moi
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                Mot de passe oublié?
              </a>
            </div>
          </div>
          <div className='text-center'>
            <button
              type="submit"
              className=" px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>

      {/* Section droite : Image et Dégradé */}
      <div
        className="hidden w-full bg-cover md:block"
        style={{
          backgroundImage: 'url("/assets/covers/cover4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="flex items-center justify-center h-full bg-gradient-to-r from-blue-500 via-red-500 to-purple-500">
          {/* Optionnel : contenu supplémentaire ici */}
          <img src={bg} alt="" className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
}

export default Connexion;
