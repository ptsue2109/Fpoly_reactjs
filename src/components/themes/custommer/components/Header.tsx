import React from 'react'
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Link } from 'react-router-dom';
interface Props {
    
}

const Header = (props: Props) => {
    return (
         <>
            <div className="flex justify-content-between bg-white align-items-center max-h-7rem">
                <div className="flex-auto flex justify-items-center justify-content-center">
                    <form id='form' action='/tim-kiem' >
                        <input type="text" name="q" placeholder='Enter keyword..'
                            className='p-2 w-18rem border-gray-100 outline-none hover:border-gray-100 focus:gray-100 active:border-gray-100' />
                        <button className='p-2 border-300 cursor-pointer bg-red-600' ><i className='pi pi-search text-white'></i></button>
                    </form>

                </div>
                <div className="flex-auto flex  justify-content-center m-2 px-5 py-3 border-round align-items-center gap-3">
                    <Link to={'/'}><img src="https://theme.hstatic.net/200000343865/1000796725/14/logo.png?v=451" alt="" /></Link>
                </div>
                <div className="flex-auto flex justify-content-center align-items-center  gap-3">
                    <Avatar label="P" className="mr-2" />
                    <Link to={'/'} className='no-underline'><i className="pi pi-heart mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '1.5rem' }}><Badge value="0" ></Badge></i> </Link>
                    <Link to={'/'} className='no-underline'><i className="pi pi-shopping-cart mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '1.6rem' }}><Badge value="0" ></Badge></i></Link>
                </div>
            </div>
        </>
    )
}

export default Header
