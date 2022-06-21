import React, { Component } from 'react';
import {SiAdobecreativecloud, SiVisualstudiocode} from 'react-icons/si'
import {GiGamepad, GiMusicSpell} from 'react-icons/gi'
import $ from 'jquery';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

class Menu extends Component {
    
    componentDidMount() {
        $('a').on('click', function(){
            $('a').removeClass('active');
            $(this).addClass('active');
        })
    }

    render() {
        return(
            <div className='menu justify-content-center text-align-center'>
                <div>
                    <h3 className='title pt-5 pb-5  text-center'>Andrew Stanecek</h3>
                    <nav className="nav nav-pills flex-column p-4">
                        <CustomLink to="/Software"><SiVisualstudiocode/> Software</CustomLink>
                        <CustomLink to="/Art"> <SiAdobecreativecloud/> Art</CustomLink>
                        <CustomLink to="/GameDevelopment"> <GiGamepad/> Game Development</CustomLink>
                        <CustomLink to="/Music"> <GiMusicSpell/> Music</CustomLink>
                    </nav>
                </div>
            </div>
        );
    }
}

//creates a Link with an active or inactive className
function CustomLink({ to, children, ...props}){
    //gets the full path of the passed href
    const resolvedPath = useResolvedPath(to)
    //compares the path passed to the current path to see if it is active
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return(
        <Link className={isActive ? "nav-link active" : "nav-link"} to={to} {...props}>{children}</Link>
    )
}

export default Menu;