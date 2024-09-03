/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import bg from "../../assets/images/bg.jpg";
import { Link } from 'react-router-dom';

function Inscription() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
    if (password === confirmPassword) {
      console.log({ username, email, password });
    } else {
      alert("Les mots de passe ne correspondent pas");
    }
  };

  return (
    <div className="flex min-h-screen">

      {/* Section gauche : Image et Dégradé */}
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

      {/* Section gauche : Formulaire */}
      <div className="flex flex-col justify-center w-full max-w-lg p-8 bg-white">
        <div className="mb-6">
          <h2 className="text-3xl text-center font-extrabold text-gray-900">S'inscrire</h2>
          <p className="mt-2 text-sm text-gray-600">
            Vous avez déjà un compte?{' '}
            <Link to="/connexion" className="font-medium text-orange-600 hover:text-orange-500">
              Connectez-vous maintenant
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Nom d'utilisateur
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
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
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <div className='text-center'>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
}export default Inscription;