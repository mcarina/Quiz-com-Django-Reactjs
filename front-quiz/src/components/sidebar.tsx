import { useNavigate } from "react-router-dom";
import { Navbar, Button, Container} from 'react-bootstrap'

const Sidebar = () =>{
    const navigate = useNavigate();

    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                    <Navbar.Brand onClick={() => navigate('/')}>Quiz perguntas e repostas</Navbar.Brand>
                    <Button onClick={() => navigate('/dashboard')} variant="dark" style={{ color: 'white' }}>dashboard</Button>
            </Container>
        </Navbar>
    );
}

export default Sidebar;