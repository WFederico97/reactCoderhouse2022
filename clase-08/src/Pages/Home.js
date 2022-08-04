import React from 'react';
import { Link } from 'react-router-dom';
export default function Home () {
    return (
        <div className="text-dark">
            Bienvenidos a mi Home
        <Link to='/Users'> Users</Link>
        </div>
        
    )
}