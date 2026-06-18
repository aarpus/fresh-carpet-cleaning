import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header id="header" className="box-style">
      <TopBar />
      <Navbar />
    </header>
  );
}
