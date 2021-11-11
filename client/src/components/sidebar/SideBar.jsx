import './sidebar.css'
import { Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router'

export default function SideBar() {
    const PF = "http://localhost:5000/images/";

    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)

        }
        getPost()
    }, [path])
    return (
        <Col sm={12} md={4} className="border sidebar">
            <div className="center-bar">
                <h5>Search</h5>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="cari..."
                    />
                    <Button variant="outline-primary" id="button-addon2">
                        <i className="topSearchIcon fas fa-search"></i>
                    </Button>
                </InputGroup>
            </div>
            <div className="H-bar mb-3 p-3">
                <h5>HALAMAN</h5>
                <ul>
                    <Link to="/" className="link">
                        <li>Home</li>
                    </Link>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <h5 className="p-3">POPULAR POST</h5>
            <div className="pop-side mb-3 p-3">
                <img src={PF + post.photo} alt="" />
                <p>{post.titleLyrics}</p>
            </div>
            <div className="follow-us mb-3 p-3">
                <h5>FOLLOW US</h5>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <h6 className="mt-5">CHAT FORM</h6>
                <a className="link" href="https://api.whatsapp.com/send?phone=628979111476&text=jika%20ingin%20request%20lagu%20dengan%20cepat%20bisa%20chat%20kami%20diatas%20ya">
                <i className="fab fa-whatsapp"></i>
                </a>
            </div>
            <div className="thanks">
                <p>Terimakasih Sudah Datang di Website kami ya... Jangan Sungkan Saran dan Kritikan </p>
            </div>
        </Col>
    )
}
