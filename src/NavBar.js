const NavBar = () => {
  return (
    <nav>
      <div className=" p-3 px-5  ">
        <div className=" Nav d-flex flex-row justify-content-around text-light h4 font-family-century  container-xxl ">
          <div>
            <div>
              <a href="#Home">Home</a>
            </div>
          </div>
          <div>
            <div>
              <a href="#portfolio">portfolio</a>
            </div>
          </div>
          <div>
            <a href="#services">Services</a>
          </div>
          <div>
            <a href="#contact" className=" d-none d-md-inline ">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
