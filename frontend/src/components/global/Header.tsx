import { useAppContext } from "@/contexts/AppContext";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Header() {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-rose-100 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-rose-500 font-semibold tracking-wide">
          <Link to="/">Booking.dev</Link>
        </span>
        <div className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings">My Bookings</Link>
              <Link to="/my-hotels">My Hotels</Link>
              <Button>Sign Out</Button>
            </>
          ) : (
            <>
              <Link to="/register">
                <Button data-testid="sign-up-header-button">Sign Up</Button>
              </Link>
              <Link to="/sign-in">
                <Button
                  variant="secondary"
                  className="text-rose-600"
                  data-testid="sign-in-header-button"
                >
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
