import './post.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Post({ post }) {
    const PF = "http://localhost:5000/images/";
    return (
        <>
            <Col xs={6} md={3} className="mb-3">
                <Link to={`/post/${post._id}`} className="link">
                    <div className="postCard">
                        {post.photo && (
                            <img src={PF + post.photo} alt="" />
                        )}
                        <div className="postTitle">
                            <h1>[Lirik + Terjemahan] {post.titleLyrics}</h1>
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    )
}
