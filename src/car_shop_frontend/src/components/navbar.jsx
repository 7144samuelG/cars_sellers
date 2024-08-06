import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../@/components/ui/button";
import { cn } from "../@/lib/utils";
import { useAuth } from "./authclient";
export const Navbar = () => {
  const [auth, setAuth] = useState(true);
  const { logout, login, isAuth } = useAuth();
  return (
    <div className="max-w-[2500px] mx-auto p-3 bg-gray-800">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white">
          Acme Sellers
        </Link>
        <div className={cn("flex items-center space-x-5 text-white")}>
          <Link to="/">Cars</Link>
          {isAuth ? (
            <>
              <Link to="/sell_your_car">Sell-with-Others</Link>
            </>
          ) : (
            <></>
          )}

          <Link to="/helpline">HelpLine</Link>
          {isAuth ? (
            <>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button onClick={login}>Login</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
