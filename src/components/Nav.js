import { Link } from "react-router-dom";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Nav = () => {
  const [user, loading] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar fluid rounded className="w-full max-w-screen-xl m-auto">
      <Navbar.Brand href="#">
        <Link to="/" className="flex">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="https://preview.redd.it/n20zr2c13vb71.png?width=460&format=png&auto=webp&v=enabled&s=61ecaeb144579520463435437437dd11b37f1a48"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TradingView
          </span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!user && <Button onClick={GoogleLogin}>Login</Button>}
        {user && (
          <Dropdown
            inline
            label={<Avatar alt="User settings" img={user.photoURL} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Watchlist</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => auth.signOut()}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active href="/">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
