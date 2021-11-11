import { useContext, useEffect, useState } from 'react'
import { Col, Card, Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import './singlepost.css'
import { useLocation } from 'react-router'
import { Context } from '../../context/Context'

export default function SinglePost() {

    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);

    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    //delete modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)

        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            // delete
            await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
            // lokasi ke home
            window.location.replace("/");
        } catch (err) {

        }

    }
    return (
        <Col xs={12} md={7} className="border me-5 bg-color p-4 singlePost">
            {user && (

                <div className="icons">
                    <div className="icon-edit">
                        <i className="fas fa-edit"></i>
                    </div>
                    <div className="icon-delete">
                        <i className="far fa-trash-alt" onClick={handleShow}></i>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Hapus Lyrics</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Apakah Kamu yakin Hapus Lyric ini?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Kembali
                                </Button>
                                <Button variant="danger" onClick={handleDelete}>
                                    Hapus
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            )}
            <div className="mb-3">
                <h3>[Lirik+Terjemahan]</h3>
                <h4>{post.titleLyrics}</h4>
            </div>
            <div className="postInfo">
                <span className="me-3">By: {post.username}</span>
                <span>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <div className="singlePostImg">
                <Card className="box-sizeposition">
                    {post.photo && (
                        <Card.Img src={PF + post.photo} />
                    )}
                </Card>
            </div>
            <div className="mt-5">
                <h5>[Lirik, Lyrics, Lirica, Liedtext, Letras, Paroles, 歌詞, บทร้อง, лирика]</h5>
            </div>
            <div className="mt-5">
                <h6>ROMANJI :</h6>
            </div>
            <div className="postLyrics">
                {post.romanji}
            </div>
            <div className="mt-5 postEng">
                <h6>ENGLISH :</h6>
                <p>
                    {post.english}
                </p>
            </div>
            <div className="mt-5 postKanji">
                <h6>KANJI :</h6>
                <p>
                    {post.kanji}
                </p>
            </div>
        </Col>
    )
}
