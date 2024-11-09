const ServiceCards = ({ title, description, imageUrl }) => {
  return (
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card">
        <div class="card-body text-md-start text-center">
          <img src={imageUrl} alt="service" class="img-fluid mb-4" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ServiceCards;
