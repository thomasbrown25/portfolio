const Resume = ({ resumeData }) => {
  const { year, position, graduation, university, company, details, techList } =
    resumeData;

  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation}</h5>
        <h6 className="mi-resume-company">{company || university}</h6>
        <p>{details}</p>
        {techList && (
          <ul class="mi-project-tech-list">
            Tech Stack:
            {techList?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Resume;
