import axios from 'axios';
import { useContext, useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Context } from '../../context/Context';
import './write.css'

export default function Write() {

    const [titleLyrics, setTitleLyrics] = useState("");
    const [romanji, setRomanji] = useState("");
    const [english, setEnglish] = useState("");
    const [file, setFile] = useState(null);
    const [kanji, setKanji] = useState("");

    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            titleLyrics,
            romanji,
            english,
            kanji
        };
        if (file) {
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
              await axios.post("/upload", data);
            } catch (err) {}
          }
        try{
            const res = await axios.post("/posts", newPost);
            window.location.replace('/post/' + res.data._id)
        }catch(err) {}
    }

    return (
        <Container>
            <Row className="justify-content-md-center pt-5">
                <Col md={6} className="write">
                    <div className="pb-3 text-center">
                        <h2>Input Lyrics</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 text-white">
                            <Form.Label>Gambar </Form.Label>
                            <Form.Control type="file" size="sm" 
                            onChange={(e) => setFile(e.target.files[0])}/>
                        </Form.Group>
                        <Form.Group className="mb-3 text-white">
                            <Form.Label>Judul Lyric</Form.Label>
                            <Form.Control type="text" placeholder="Isi Judul Lyrics" 
                            onChange={(e) => setTitleLyrics(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3 text-white">
                            <Form.Label>ROMANJI : </Form.Label>
                            <Form.Control as="textarea" rows={3} 
                            onChange={(e) => setRomanji(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3 text-white">
                            <Form.Label>ENGLISH : </Form.Label>
                            <Form.Control as="textarea" rows={3} 
                            onChange={(e) => setEnglish(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3 text-white">
                            <Form.Label>KANJI : </Form.Label>
                            <Form.Control as="textarea" rows={3} 
                            onChange={(e) => setKanji(e.target.value)}/>
                        </Form.Group>
                        <Button variant="success" type="submit">Done</Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}
