import { Link, useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h1>404 - Page Not Found</h1>

      <p>
        Sorry! The page you are looking for does not exist.
      </p>

      <h3>Error Details</h3>

      <p>{error?.statusText || error?.message}</p>

      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;