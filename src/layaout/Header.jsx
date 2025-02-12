import { Link } from "react-router-dom";
import Logo from '../assets/Logo/LogoHeader.png';

export default function Navbar() {
    return (
      <nav className="px-6 py-10 bg-gray-800 text-white flex justify-between">
        <img src={Logo} alt="Logo" className="w-22"/>
        <div className="flex items-center justify-center text-lg sm:text-xl font-semibold gap-4">
          <Link className="sm:px-4 py-2 hover:bg-zinc-100 rounded-xl hover:text-gray-800 transition-all scale-3d hover:scale-110 hover:-translate-y-2" to="/">Home</Link>
          <Link className="sm:px-4 py-2 hover:bg-zinc-100 rounded-xl hover:text-gray-800 transition-all scale-3d hover:scale-110 hover:-translate-y-2" to="/">Sobre</Link>
          <Link className="sm:px-4 py-2 hover:bg-zinc-100 rounded-xl hover:text-gray-800 transition-all scale-3d hover:scale-110 hover:-translate-y-2" to="/contact">Contato</Link>
        </div>
      </nav>
    );
  }