import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Share from "../Share/Share";
// import UserMenu from "../UserMenu";
import shareMy from "../../images/shareMy.png";

export default function navbar() {
  return (
    <div className="navbar__ fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="navbar__items">
            <Logo />
            <Share image={shareMy} />
            {/* <UserMenu /> */}
          </div>
        </Container>
      </div>
    </div>
  );
}
