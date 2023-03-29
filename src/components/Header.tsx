import React from 'react'
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <div className='flex justify-between bg-dblueDME text-whiteDMT&LME h-20 pt-6'>
                <Link to={`/`}>
                    <div>Where in the world?</div>
                </Link>
                <div>Dark Mode</div>
            </div>
        </div>
    )
}
