const Contact = () => {
  return (
    <div className="contact bg-dark pb-5 container-xxl" id="contact">
      <h1 className="text-light text-center pt-5 fw-bold display-1">
        contact me
      </h1>
      <form action="" className="form ">
        <input required type="text" name="name" placeholder="Enter Your Name" />
        <input required type="email" placeholder="Enter Your Email" />
        <textarea
          className="msg"
          required
          name="text"
          placeholder="Enter Your Message"
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default Contact;
