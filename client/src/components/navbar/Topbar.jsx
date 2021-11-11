import './navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import SideBar from '../sidebar/SideBar';

export default function Topbar() {
    const { user, dispatch } = useContext(Context);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <div className="topbar">
            <div className="fromLogin">
                <div className="offcv">
                    <i className="fas fa-bars" onClick={handleShow}></i>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <div className="offsidebar">
                        <SideBar/>
                        </div>
                    </Offcanvas>
                </div>
                {!user && (
                    <Link className="link" to="/login">
                        <div className="buttonLogin"><i className="fas fa-sign-in-alt"></i></div>
                    </Link>
                )}
                {user && (
                    <Link className="link" to="/write">
                        <div className="btn-write">WRITE</div>
                    </Link>
                )}
                {user && (
                    <div className="btn-logout" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i></div>
                )}
            </div>
            <div className="judul">
                <Link to="/" className="link">
                    <h1>NekoLyrics</h1>
                </Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptas laudantium officiis a aliquid. Quae.</p>
            </div>
        </div>
    )
}
