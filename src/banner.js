import './banner.css';
function Banner() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id="brand">Museos de arte moderno</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link navlink active" href="#">Museos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navlink active" href="#">Artistas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navlink active" href="#">Movimientos</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
export default Banner;