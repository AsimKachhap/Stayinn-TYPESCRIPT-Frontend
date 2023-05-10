import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="footer w-100vw ">
      <div className="container  bg-red-400">Footer</div>
    </div>
  );
};

export default Footer;
