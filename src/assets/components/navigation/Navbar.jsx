import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // Get the current path

  // Determine the link text and destination based on the current page
  let linkText;
  let linkTo;

  if (location.pathname === '/') {
    linkText = 'Sign In';
    linkTo = '/login';
  } else if (location.pathname === '/login') {
    linkText = 'Home';
    linkTo = '/';
  } else if (location.pathname === '/signup') {
    linkText = 'Home';  // You might have a sign-out logic here instead
    linkTo = '/';
  }else if (location.pathname === '/admin') {
    linkText = 'Home';  // You might have a sign-out logic here instead
    linkTo = '/';
  }else if (location.pathname === '/generate') {
    linkText = 'Log out';  // You might have a sign-out logic here instead
    linkTo = '/';
  }  else if (location.pathname === '/dashboard') {
    linkText = 'Log out';  // You might have a sign-out logic here instead
    linkTo = '/';
  }  
  else if (location.pathname === '/tokens') {
    linkText = 'Log out';  // You might have a sign-out logic here instead
    linkTo = '/';
  }    else if (location.pathname === '/user') {
    linkText = 'Log out';  // You might have a sign-out logic here instead
    linkTo = '/';
  }  
  else {
    linkText = 'Sign In';
    linkTo = '/login';
  }

  return (
    <div className="navbar w-screen h-24 px-16 flex flex-row justify-between items-center">
      <div className="logo text-2xl font-semibold">TokenGen</div>

      <div className="login border border-solid border-black px-4 py-1 rounded-3xl cursor-pointer">
        <Link to={linkTo}>{linkText}</Link>
      </div>
    </div>
  );
}

export default Navbar;
