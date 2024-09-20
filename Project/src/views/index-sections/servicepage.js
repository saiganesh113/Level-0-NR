import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faScrewdriverWrench, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Corrected import

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [repairs, setRepairs] = useState([]);
  const [installations, setInstallations] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate(); // Corrected use of navigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchData = async () => {
    try {
      const [
        servicesResponse,
        repairsResponse,
        installationsResponse,
        notificationsResponse,
      ] = await Promise.all([
        axios.get('http://localhost:5000/api/services'),
        axios.get('http://localhost:5000/api/repairs'),
        axios.get('http://localhost:5000/api/installations'),
        axios.get('http://localhost:5000/api/notifications'),
      ]);

      setServices(servicesResponse.data);
      setRepairs(repairsResponse.data);
      setInstallations(installationsResponse.data);
      setNotifications(notificationsResponse.data);

      setAllItems([
        ...servicesResponse.data,
        ...repairsResponse.data,
        ...installationsResponse.data,
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    console.log('Add to cart:', item);
  };

  return (
    <div className="service-section mb-4">
      <h2>AC Repair & Services</h2>
      <p>#1 AC Installation, Repair & Services</p>
      <div className="rating mb-2">⭐⭐⭐⭐⭐ (6.75M Bookings)</div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="service-info p-3 bg-light">
              <div className="row-1">
                <div>Certified Services & 30 days Warranty</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-info p-3 bg-light">
              <div className="row-2">
                <div>All Offers & Discounts</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-info p-3 bg-light">
              <div className="row-3">
                <div>Cashback up to 25%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Menu Bar */}
      <div className="container mt-5">
        <div className="floating-menu-container">
          <div className="menu-button-container">
            <button
              className="btn btn-primary floating-menu"
              id="menuButton"
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
          <div className={`floating-menu-bar ${menuOpen ? 'show' : ''}`}>
            <Link
              to="service-section"
              smooth={true}
              duration={500}
              className="menu-option"
              onClick={toggleMenu}
            >
              Service <FontAwesomeIcon icon={faToolbox} className="ms-2" />
            </Link>
            <Link
              to="repair-section"
              smooth={true}
              duration={500}
              className="menu-option"
              onClick={toggleMenu}
            >
              Repair <FontAwesomeIcon icon={faScrewdriverWrench} className="ms-2" />
            </Link>
            <Link
              to="install-section"
              smooth={true}
              duration={500}
              className="menu-option"
              onClick={toggleMenu}
            >
              Install <FontAwesomeIcon icon={faPlus} className="ms-2" />
            </Link>
          </div>
        </div>

        {/* Service Section */}
        <div id="service-section" className="d-flex justify-content-between align-items-center mb-2">
          <h2 style={{ fontSize: '2.5rem' }}>Service</h2>
          <a href="#service-section" className="text-primary">Know more</a>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-md-6 mb-4" key={service.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">Type: {service.type}</p>
                  <p className="card-text">Price: ₹{service.price}</p>
                  <p className="card-text">Discount: ₹{service.discount}</p>
                  <p className="card-text">Warranty: {service.warranty}</p>
                  <p className="card-text">Cleaning: {service.cleaning}</p>
                  <p className="card-text">Technology: {service.technology}</p>
                  <p className="card-text">Estimated Time: {service.time}</p>
                  <Button
                    style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                    onClick={() => navigate('/login')} // Corrected route to /login
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="card-footer text-center bg-light p-2">
                  <span className="text-muted">Price: ₹{service.price}</span> {/* Replaced <large> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <br />

        {/* Repair Section */}
        <div id="repair-section" className="d-flex justify-content-between align-items-center mb-2">
          <h2 style={{ fontSize: '2.5rem' }}>Repair & Gas refill</h2>
          <a href="#repair-section" className="text-primary">Know more</a>
        </div>
        <div className="row">
          {repairs.map((repair) => (
            <div className="col-md-6 mb-4" key={repair.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{repair.name}</h5>
                  <p className="card-text">Type: {repair.type}</p>
                  <p className="card-text">Price: ₹{repair.price}</p>
                  <p className="card-text">Discount: ₹{repair.discount}</p>
                  <p className="card-text">Warranty: {repair.warranty}</p>
                  <p className="card-text">Technology: {repair.technology}</p>
                  <p className="card-text">Estimated Time: {repair.time}</p>
                  <Button
                    style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                    onClick={() => navigate('/login')} // Corrected route to /login
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="card-footer text-center bg-light p-2">
                  <span className="text-muted">Price: ₹{repair.price}</span> {/* Replaced <large> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <br />

        {/* Install Section */}
        <div id="install-section" className="d-flex justify-content-between align-items-center mb-2">
          <h2 style={{ fontSize: '2.5rem' }}>Install</h2>
          <a href="#install-section" className="text-primary">Know more</a>
        </div>
        <div className="row">
          {installations.map((installation) => (
            <div className="col-md-6 mb-4" key={installation.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{installation.name}</h5>
                  <p className="card-text">Type: {installation.type}</p>
                  <p className="card-text">Price: ₹{installation.price}</p>
                  <p className="card-text">Discount: ₹{installation.discount}</p>
                  <p className="card-text">Warranty: {installation.warranty}</p>
                  <p className="card-text">Technology: {installation.technology}</p>
                  <p className="card-text">Estimated Time: {installation.time}</p>
                  <Button
                    style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                    onClick={() => navigate('/login')} // Corrected route to /login
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="card-footer text-center bg-light p-2">
                  <span className="text-muted">Price: ₹{installation.price}</span> {/* Replaced <large> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
