import React from 'react';

function Profile({ profile }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="row g-0">
        <div className="col-md-4 profile-img-container text-center p-5 d-flex flex-column justify-content-center align-items-center text-white">
          <div className="overflow-hidden rounded-circle mb-3 border border-4 border-white shadow">
            <img
              src={profile.photo_url}
              alt={profile.full_name}
              className="hover-img"
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
            />
          </div>
          <h5 className="fw-bold mb-0">{profile.full_name}</h5>
          <small className="opacity-75">{profile.nim}</small>
        </div>

        <div className="col-md-8 bg-white p-5">
          <h6 className="text-primary fw-bold text-uppercase mb-2">About Me</h6>
          <h2 className="fw-bold mb-3">{profile.headline}</h2>
          <p className="text-muted lh-lg mb-4">
            {profile.short_bio}
          </p>

          <div className="row mb-4">
            <div className="col-sm-6 mb-2">
              <strong>Prodi:</strong> <span className="text-muted">{profile.prodi}</span>
            </div>
            <div className="col-sm-6 mb-2">
              <strong>Angkatan:</strong> <span className="text-muted">{profile.angkatan}</span>
            </div>
            <div className="col-sm-6 mb-2">
              <strong>Lokasi:</strong> <span className="text-muted">{profile.location}</span>
            </div>
          </div>

          <a
            href={profile.portfolio_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-4 py-2 rounded-pill shadow-sm hover-btn"
          >
            Lihat Portfolio 🚀
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;