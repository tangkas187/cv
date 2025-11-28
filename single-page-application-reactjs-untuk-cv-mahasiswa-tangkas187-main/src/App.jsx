import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import data from "./data/dataMahasiswa.json";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top" data-aos="fade-down">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            {data.profile.full_name}
          </a>
        </div>
      </nav>

      <main className="container py-5 flex-grow-1">
        <section className="mb-5" data-aos="fade-up">
          <Profile profile={data.profile} />
        </section>

        <hr className="my-5 text-muted opacity-25" />

        <section className="mb-5">
          <Skills skills={data.skills} />
        </section>

        <hr className="my-5 text-muted opacity-25" />

        <section className="mb-5">
          <Experiences experiences={data.experiences} />
        </section>
      </main>

      <footer className="bg-white text-center py-4 mt-auto border-top">
        <div className="container">
          <small className="text-muted">
            © 2025 {data.profile.full_name}. All Rights Reserved.
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;