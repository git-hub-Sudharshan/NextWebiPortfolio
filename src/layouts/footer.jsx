const Footer = () => {
    return (
        <footer>
            <p className="text-primary">&copy; {new Date().getFullYear()} NextWebi Portfolio. All rights reserved.</p>
        <div className="text-xl font-bold ">
      <div className="p-4 bg-background text-text font-base p">
      <h1 className="text-primary">Hello Tailwind with CSS Variables!</h1>
      <p className="underline text-secondary text- ">This uses your CSS custom properties.</p>
    </div>
    </div>
        </footer>
    );
};

export default Footer;