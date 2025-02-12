import Gitlogo from '../assets/Logo/logo-github.svg';
import { Link } from 'react-router-dom'
export default function Footer() {

    return (
        <>
            <div className="w-full py-10 bg-gray-800">
                <div className='text-white flex flex-col justify-between items-center gap-4'>
                    <p>Todos os direitos reservados &copy; 2025</p>
                    <Link to={'https://github.com/LeviDLima1'}><img src={Gitlogo} alt=""
                        className='w-10 bg-white rounded-full' /></Link>
                </div>
            </div>

        </>
    )
}