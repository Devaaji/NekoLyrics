import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap'
import { useLocation } from 'react-router';
import Topbar from '../../components/navbar/Topbar'
import Posts from '../../components/posts/Posts'
import './home.css'

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data)
            setLoading(true);
        }
        fetchPosts()
    }, [search])
    return (
        <>
            <div className="Home">
                <Container>
                    <Topbar />
                    {loading ?
                        <Posts posts={posts} /> :
                        <div className="spin-center">
                            <Spinner animation="grow" variant="primary" />
                        </div>
                    }
                </Container>
            </div>
        </>
    )
}
