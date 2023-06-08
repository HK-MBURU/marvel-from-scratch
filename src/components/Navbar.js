import React, { Children } from "react";

function Navbar() {
  
  return (
    <nav className="nav">
      <a href="/" className="site-tittle">Marvel Web </a>
      <ul>
        <li>
          <CustomLink href="/pricing"> Pricing</CustomLink>
        </li>
        <li>
          <CustomLink href="/about">About</CustomLink>
        </li>
      </ul>
    </nav>
  );
}
function CustomLink({href,children,...props}){
  const path=window.location.pathname
  return(
    <li className={path===href? "active" :""}>
      <a href={href}{...props}>{children}</a>
    </li>
  )

}

export default Navbar;
