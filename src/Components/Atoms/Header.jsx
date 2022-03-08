import logo from "../../Images/logo.png";

export default function Header({ title, subtitle }) {
    return (
        <div>
            <nav className="nav">
                <img src={logo} alt="React-logo" width={"40px"} />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}
