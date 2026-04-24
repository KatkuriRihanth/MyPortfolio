import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <img src={profile} alt="profile" className="profile-img" />
        <h1>KATKURI RIHANTH</h1>
        <p>Artificial Intelligence Student | ML Enthusiast</p>
        <p>Hyderabad, India</p>
      </section>

      {/* ABOUT */}
      <section className="container">

        <div className="card">
          <h2>About Me</h2>
          <p>
            I am an Artificial Intelligence student at Mahindra University 
            with a strong interest in Machine Learning, NLP, and AI systems. 
            I enjoy building real-world applications and exploring innovative solutions.
          </p>
        </div>

        <div className="card">
          <h2>Education</h2>
          <p><b>B.Tech (Artificial Intelligence)</b> - Mahindra University</p>
          <p>CGPA: 6/10 (till 5th semester)</p>
          <br/>
          <p><b>Intermediate</b> - PAGE College</p>
          <p>Percentage: 89%</p>
          <br/>
          <p><b>10th Grade</b> - Hyderabad Public School</p>
          <p>Percentage: 85%</p>
        </div>

        <div className="card">
          <h2>Skills</h2>
          <p><b>Programming:</b> C, Python, Java, MATLAB, SQL</p>
          <p><b>Tools:</b> LaTeX, SolidWorks, AutoCAD</p>
        </div>

        <div className="card">
          <h2>Contact</h2>
          <p>Phone: +91 9392733457</p>
          <p>Email: Se23uari063@mahindrauniversity.edu.in</p>
          <p>Personal Email: joynjoy3112@gmail.com</p>
        </div>

        <div className="card">
  <h2>Interests & Activities</h2>
  <p><b>Sports:</b> Cricket, Tennis</p>
  <p><b>Interests:</b> Watching sports and movies</p>
  <p><b>Social Work:</b> Interested in charity and helping the underprivileged</p>
</div>

      </section>

    </div>
  );
}

export default Home;