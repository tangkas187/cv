import React from 'react';

function Skills({ skills }) {
  return (
    <div>
      <h3
        className="fw-bold mb-4 border-start border-4 border-primary ps-3"
        data-aos="fade-right"
      >
        My Skills
      </h3>

      <div className="row g-4">
        {skills.map((skill, index) => (
          <div
            className="col-6 col-md-3"
            key={skill.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-4 hover-card bg-white">
              <div className="mb-3">
                <img
                  src={skill.icon_url}
                  alt={skill.name}
                  style={{ width: "60px", height: "60px", objectFit: "contain" }}
                />
              </div>
              <h6 className="fw-bold mb-1">{skill.name}</h6>
              <span className="badge bg-light text-primary border border-primary-subtle rounded-pill">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;