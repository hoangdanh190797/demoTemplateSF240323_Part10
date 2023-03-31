import React from 'react'
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import '../styles/components/_header.scss';

export default function Header() {
    return (
        <div id='header_'>
            <div className='header_content'>
                <div>
                    <Link to={`/`}>
                        <div>Where in the world?</div>
                    </Link>
                </div>
                <div>Dark Mode</div>
            </div>
        </div>
    )
}
