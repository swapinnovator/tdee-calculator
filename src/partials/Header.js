import Logo from 'assets/images/logo.png'; 

function Header(){
    return(
        <>
            <div className="headerMain" data-aos="fade-in">
                <div className="container">
                    <div className="headerRow">
                        <div className="logoCol">
                            <div className="logo">
                                <a href="/">
                                    <img src={Logo} />
                                </a>
                            </div>
                        </div>
                        <div className="navCol">
                            <ul>
                                <li>
                                    <a href="#" className="contact-btn">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
