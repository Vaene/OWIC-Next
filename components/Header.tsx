import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <img
          src="https://assets.codepen.io/16327/gsap-logo-light.svg"
          alt=""
          srcSet=""
        />
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
