import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor:'#f1356d',
                    borderRadius:'10px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
