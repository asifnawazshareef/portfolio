import React from "react";

const SideBar = () => {
  return (
    <div className="d-flex flex-column align-items-end p-3 gap-3 text-light sidebar-social-links">
      <a
        href="mailto:asifnawazshareef@gmail.com"
        target="_blank"
        data-toggle="tooltip"
        title="Email"
      >
        <i class="fa-solid fa-envelope fa-xl text-light   transform text-light transition-transform duration-300 ease-in-out hover:scale-125 hover-text-danger"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/asif-nawaz-sharif/"
        target="_blank"
        data-toggle="tooltip"
        title="Linkedin"
      >
        <i class="fa-brands fa-linkedin-in fa-xl transform text-light transition-transform duration-300 ease-in-out hover:scale-125"></i>
      </a>
      <a
        href="https://github.com/asifnawazshareef/"
        target="_blank"
        data-toggle="tooltip"
        title="Github"
      >
        <i class="fa-brands fa-github fa-xl  transform text-light transition-transform duration-300 ease-in-out hover:scale-125"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=923361114094"
        target="_blank"
        data-toggle="tooltip"
        title="Whatsapp"
      >
        <i class="fa-brands fa-whatsapp fa-xl  transform text-light transition-transform duration-300 ease-in-out hover:scale-125"></i>
      </a>
    </div>
  );
};

export default SideBar;
