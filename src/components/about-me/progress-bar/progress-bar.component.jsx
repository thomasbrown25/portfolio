import './progress-bar.styles.css';

const ProgressBar = ({ technology, percent }) => {
    return (
        <div className='progress-bar'>
            <p className='progress-text'>
                {technology}
                <span>{percent}</span>%
            </p>
            <div className='progress-percent'></div>
        </div>
    );
};

export default ProgressBar;
