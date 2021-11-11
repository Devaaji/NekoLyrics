import { useState } from 'react'
import { Row, Button } from 'react-bootstrap'
import Post from '../post/Post'
import './posts.css'

export default function Posts({ posts }) {

    const [visible, setvisible] = useState(1);

    const handleShowMore = () => {
        setvisible((prevValue) => prevValue + 4);

    }

    return (
        <Row className="justify-content-md-center">
            {posts.slice(0, 3 + visible).map((p) => (
                <Post post={p} />
            ))}
            <div className="accpt">
                <Button variant="primary" onClick={handleShowMore}>Load more</Button>
            </div>
        </Row>
    )
}
