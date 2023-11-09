import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    let navStyle = 'hover:bg-light-blue hover:text-black h-full w-full p-3 ';
    return (
        <>
            <div className='bg-bright-blue  text-sm  py-2 m-0 overflow-hidden text-white '>
                <Link to='/home' className={navStyle}>
                    Home
                </Link>
                <Link to='/auth' className={navStyle} >
                    Login
                </Link>
                <Link to='/auth/sign-in-admin' className={navStyle} >
                    SignIN
                </Link>
            </div>

        </>

    )
}

export default Header