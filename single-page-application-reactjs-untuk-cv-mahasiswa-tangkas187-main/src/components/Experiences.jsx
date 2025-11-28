import React from 'react';

function Experiences({ experiences }) {
  return (
    <div>
      <h3
        className="fw-bold mb-4 border-start border-4 border-primary ps-3"
        data-aos="fade-right"
      >
        Experiences
      </h3>

      <div className="d-flex flex-column gap-4">
        {experiences.map((exp, index) => (
          <div
            className="card border-0 shadow-sm p-4 rounded-4 hover-card bg-white"
            key={exp.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="row g-4 align-items-center">
              <div className="col-md-2 text-center">
                <img
                  src={exp.image_url}
                  alt={exp.title}
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ maxHeight: "100px", objectFit: "contain" }}
                />
              </div>

              <div className="col-md-10">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h5 className="fw-bold mb-0">{exp.title}</h5>
                    <p className="text-primary mb-0 fw-medium">{exp.organization}</p>
                  </div>
                  <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-pill">
                    {exp.start_date} — {exp.is_current ? "Present" : exp.end_date}
                  </span>
                </div>

                <p className="text-muted mb-3">{exp.description}</p>

                <div className="d-flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="badge bg-primary bg-opacity-10 text-primary border border-primary-subtle">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;