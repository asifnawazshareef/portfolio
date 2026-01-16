const ServiceCards = ({ title, description, logos }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 d-flex">
      <div className="card w-100">
        <div className="card-body d-flex flex-column text-center text-md-start">
          <div className="service-logos mb-3">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={title}
                className={`service-logo ${logo.includes('express') ? 'dark-mode-fix' : ''}`}
              />
            ))}
          </div>

          <h3>{title}</h3>
          <p className="flex-grow-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
