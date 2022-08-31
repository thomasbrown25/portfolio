import Project from './project/project.component';

import './portfolio.styles.css';

const Portfolio = () => {
    return (
        <section className='portfolio-section'>
            <h1 className='portfolio-heading section-heading'>Projects</h1>
            <div className='projects-wrapper center'>
                <Project
                    name={'Grand Hotel'}
                    technologies={'React / Javascript / HTML / CSS'}
                    url={'https://grand-hotel-app.azurewebsites.net/'}
                    image={require('../../assets/images/grand-hotel.png')}
                />
                <Project
                    name={'Crown Clothing Ecommerce'}
                    technologies={'React / Redux / Sass / Styled Components'}
                    url={'https://crown-clothing.azurewebsites.net/'}
                    image={require('../../assets/images/crown-clothing.png')}
                />
                <Project
                    name={'Architect Website'}
                    technologies={
                        'Bootstrap / CSS3 / HTML5 / JavaScript / jQuery / API: Zomato / GitHub'
                    }
                    url={'https://ejohn156.github.io/ExpectationByDestination/'}
                    image={require('../../assets/images/expectationsByDestination.png')}
                />
                <Project
                    name={'Kanban Board'}
                    technologies={
                        'React / Redux / Styled Components / React Beautiful Dnd'
                    }
                    url={'https://kanban-board-app.azurewebsites.net/'}
                    image={require('../../assets/images/kanban-board-dashboard.png')}
                />
            </div>
        </section>
    );
};

export default Portfolio;
