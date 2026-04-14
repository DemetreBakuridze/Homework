import Logo from '../assets/Imag.png'
import Cart from '../assets/cart.svg'
import User from '../assets/user.svg'

function Header(){
return(
    <>
    <header className="flex justify-between items-center px-15 py-1.5">
        <div className="first">
        <img src={Logo} alt="" className='w-50' />
        </div>
        <div className="second">
        <nav className="flex gap-10 ">
            <a href="" className="hover: text-orange-400 duration-200">Home</a>
            <a href="" className="hover: text-orange-400 duration-200">About</a>
            <a href="" className="hover: text-orange-400 duration-200">Menu</a>
            <a href="" className="hover: text-orange-400 duration-200">Chefs</a>
            <a href="" className="hover:text-orange-400 duration-200">Pages</a>
            <a href="" className="hover:text-orange-400 duration-200">Blog</a>
            <a href="" className="hover:text-orange-400 duration-200">Contact</a>
        </nav>
        </div>
        <div className="gap-10 flex">
        <img src={Cart} alt="" className="w-8 hover:bg-orange-400 cursor-pointer rounded-full p-0.5" />
        <img src={User} alt="" className="w-8 hover:bg-orange-400 cursor-pointer rounded-full p-0.5" />
        </div>
    </header>
    </>
)
}

export default Header;