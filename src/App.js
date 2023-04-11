import React from 'react';

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Merchandising from "./pages/merchandising";
import Comics from "./pages/comics";
import Mangas from "./pages/mangas";
import Library from "./pages/library";
import Forum from "./pages/forum";
import Register from "./pages/register";
import {
    Navbar,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

function App() {
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        // <Router>
        //     <Navbar />
        //     <Routes>
        //         <Route path="/" element={<h1>Home</h1>} />
        //         <Route path="merchandising" component={Merchandising} />
        //         <Route path="comics" component={Comics} />
        //         <Route path="mangas" component={Mangas}/>
        //         <Route path="library" component={Library} />
        //         <Route path="forum" component={Forum} />
        //         <Route path="register" component={Register} />
        //     </Routes>
        // </Router>
        <div>
            <BrowserRouter>
                <h5>ReactJS Reactstrap Navbar Component</h5>
                <Navbar color="light" light>
                    <NavbarBrand href="/">Brand</NavbarBrand>
                    <NavbarToggler onClick={() => {
                        setIsOpen(!isOpen)
                    }}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/merchandising">Merchandising</NavLink>

                            <NavLink to="/comics">Comics</NavLink>

                            <NavLink to="/mangas">Mangas</NavLink>

                            <NavLink to="/forum">Login</NavLink>

                            <NavLink to="/register">Register</NavLink>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>}/>
                    <Route exact path="merchandising" element={Merchandising}/>
                    <Route exact path="comics" element={Comics}/>
                    <Route exact path="mangas" element={Mangas}/>
                    <Route exact path="library" element={Library}/>
                    <Route exact path="forum" element={Forum}/>
                    <Route exact path="register" element={Register}/>
                </Routes>
            </BrowserRouter>

        </div>

    );
}

export default App;