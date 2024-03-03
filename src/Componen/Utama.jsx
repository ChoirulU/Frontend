const Utama = () => {
    return ( 
        <div>
            <div>
            <title>Bootstrap Theme Simply Me</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font: 20px Montserrat, sans-serif;\n            line-height: 1.8;\n            color: #f5f6f7;\n        }\n\n        p {\n            font-size: 16px;\n        }\n\n        .margin {\n            margin-bottom: 45px;\n        }\n        .bg-1 {\n            background-image: url('https://i.pinimg.com/474x/c1/3e/63/c13e63c0d86989d5d1e220e4362b0b0e.jpg');\n            background-size: cover;\n            background-position: center;\n            background-repeat: no-repeat;\n            color: #000000;\n            font-family: '', Times, serif;\n            font-weight: bold;\n        }\n        .bg-2 { \n            background-color: #2e323c; \n            color: #ffffff;\n        }\n        .bg-2 h3 {\n            font-family: 'Times New Roman', Times, serif;\n            font-weight: bold;\n        }\n        .bg-3 { \n            background-color: #2e323c; \n            color: #ffffff;\n        }\n        .bg-3 h3 {\n            font-family: 'Times New Roman', Times, serif;\n            font-weight: bold;\n        }\n        .bg-4 { \n            background-color: #2f2f2f; \n            color: #fff;\n        }\n        .container-fluid {\n            padding-top: 70px;\n            padding-bottom: 70px;\n        }\n        .navbar {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            border: 0;\n            border-radius: 0;\n            margin-bottom: 0;\n            font-size: 12px;\n            letter-spacing: 5px;\n        }\n        .navbar-nav li a:hover {\n            color: #1abc9c !important;\n        }\n        .social-link {\n            display: inline-block;\n            text-align: center;\n            margin: 0 10px; /* Atur jarak antara setiap ikon dan teks */\n        }\n\n        .social-icon {\n            width: 30px;\n            height: 30px;\n            border-radius: 15px; /* Sesuaikan nilai sesuai kebutuhan */\n        }\n\n        .social-text {\n            display: block;\n            margin-top: 5px; /* Atur jarak antara ikon dan teks */\n        }\n\n    " }} />
            {/* Navbar */}
            <nav className="navbar navbar-default">
                <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#">MY ADVENTURE</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Activity</a></li>
                    <li><a href="#">Sosmed</a></li>
                    </ul>
                </div>
                </div>
            </nav>
            <div className="container-fluid bg-1 text-center">
                <h3 className="margin">MY ADVENTURE</h3>
                <img src="https://i.pinimg.com/474x/a2/7c/58/a27c58694b6d15ff35929ee0aceb2202.jpg" className="img-responsive img-circle margin" style={{display: 'inline', width: 150, height: 150, borderRadius: '50%'}} alt="Bird" />
            </div>
            <div className="container-fluid bg-2 text-center">
                <h3 className="margin">PROFIL</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
            </div>
            <div className="container-fluid bg-3 text-center">
                <h3 className="margin">ACTIVITY</h3><br />
                <div className="row">
                <div className="col-sm-4">
                    <img src="https://i.pinimg.com/564x/84/8a/9f/848a9f77dc7879c2ac0611d925242a2c.jpg" className="img-responsive margin rounded" style={{width: 350, height: 250, borderRadius: 15}} alt="Image" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://i.pinimg.com/564x/16/be/f8/16bef8cb66edb58185cf0d8dee061d28.jpg" className="img-responsive margin rounded" style={{width: 350, height: 250, borderRadius: 15}} alt="Image" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://i.pinimg.com/474x/e6/d9/00/e6d9002e1ca52ddd30946b28d1cfeb33.jpg" className="img-responsive margin rounded" style={{width: 350, height: 250, borderRadius: 15}} alt="Image" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="container-fluid bg-4 text-center">
                <p>
                Follow me on:
                </p><div />
                <a href="https://www.instagram.com/" target="_blank" className="social-link">
                <img src="https://i.pinimg.com/474x/45/f4/9e/45f49e05ead9c272c67e821cbda2f49f.jpg" alt="Instagram" className="social-icon" />
                <span className="social-text">@choirulumamm_</span>
                </a>
                <a href="https://wa.me/123456789" target="_blank" className="social-link">
                <img src="https://i.pinimg.com/474x/42/50/a3/4250a36a77c5a8e3e4e06b99a6134fa7.jpg" alt="Tiktok" className="social-icon" />
                <span className="social-text">@momon.roamer</span>
                </a>
                <p />
            </footer>
            </div>

        </div>
     );
}
 
export default Utama;