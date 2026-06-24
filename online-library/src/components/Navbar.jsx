import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background:"#1f2937",
      padding:"15px",
      display:"flex",
      justifyContent:"space-between"
    }}>
      <h2 style={{color:"white"}}>📚 Online Library</h2>

      <div>
        <Link to="/" style={{color:"white",marginRight:"20px"}}>Home</Link>

        <Link to="/browse" style={{color:"white",marginRight:"20px"}}>
          Browse Books
        </Link>

        <Link to="/add-book" style={{color:"white"}}>
          Add Book
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;