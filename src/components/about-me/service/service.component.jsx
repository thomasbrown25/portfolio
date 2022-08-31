import './service.styles.css';

const Service = ({ icon, service }) => {
    return (
        <div className='service'>
            <i className={icon}></i>
            <h2 className='service-heading'>{service}</h2>
        </div>
    );
};

export default Service;
