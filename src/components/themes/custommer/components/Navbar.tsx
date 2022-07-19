import React from 'react'
import Sliders from '../../../Sliders'
import CustomerMenu from '../../../cilent/CustomerMenu';

interface Props {
    sliderStatus: boolean
}

const Navbar = ({ sliderStatus }: Props) => {
    return (
        <>
            {!sliderStatus ? (
                <div className='grid container max-w-full mt-0 w-full gap -3 justify-content-between '>
                <div className="col-2 shadow-1">
                    <CustomerMenu />
                </div>
                <div className="col-10" >
                    <Sliders />
                </div>
            </div>
            ) : null}
        </>
    )
}

export default Navbar