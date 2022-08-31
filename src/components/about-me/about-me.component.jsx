import './about-me.styles.css';
import ProgressBar from './progress-bar/progress-bar.component';
import Service from './service/service.component';

const AboutMe = () => {
    return (
        <section className='about-me-section'>
            <h1 className='about-me-heading section-heading'>About Me</h1>
            <div className='progress-bars-wrapper'>
                <ProgressBar technology={'HTML'} percent={'97'} />
                <ProgressBar technology={'Javascript'} percent={'95'} />
                <ProgressBar technology={'React'} percent={'95'} />
                <ProgressBar technology={'CSS'} percent={'93'} />
                <ProgressBar technology={'C#/.NetCore'} percent={'91'} />
                <ProgressBar technology={'Node'} percent={'91'} />
                <ProgressBar technology={'MS SQL'} percent={'89'} />
                <ProgressBar technology={'Mongo'} percent={'89'} />
                <ProgressBar technology={'TypeScript'} percent={'73'} />
            </div>

            <div className='services'>
                <Service service={'Creative'} icon={'far fa-lightbulb'} />
                <Service service={'Problem Solving'} icon={'fas fa-cut'} />
                <Service service={'Fast'} icon={'fas fa-tachometer-alt'} />
                <Service service={'Dynamic'} icon={'fas fa-rocket'} />
            </div>
        </section>
    );
};

export default AboutMe;
