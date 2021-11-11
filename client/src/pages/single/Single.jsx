import { Container, Row } from 'react-bootstrap'
import Topbar from '../../components/navbar/Topbar'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlepost/SinglePost'
import './single.css'

export default function Single() {
    return (
        <Container>
            <Topbar />
            <Row>
                <SinglePost />
                <SideBar/>
            </Row>
        </Container>
    )
}
