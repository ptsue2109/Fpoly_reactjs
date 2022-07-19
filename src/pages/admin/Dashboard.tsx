import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    
}

const Dashboard = (props: Props) => {
    return (
        <div>
            Dashboard
            <Link to={'/admin/products'}>List Products</Link>
        </div>
    )
}

export default Dashboard
