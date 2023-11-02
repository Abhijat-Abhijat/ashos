import React from 'react'
import image from '../assets/ASH_OS_logo.png'
import '../styles/Home.scss'
// import '../styles/App.scss'
import lapPic from '../assets/lap_pic.png'
function Home() {
  return (
    <>
      <section>
        <div className="home">
          <div className="home_right">
            <div className="bg"></div>
            <img src={image} alt="" />
          </div>
          <div className="home__left">
            <h1>An Acostic , Simple and Highly Optimized Linux Distribution</h1>
            <p>
              ASH OS is an open-source, Arch-based Linux distribution geared
              towards better Performance on even the worst specs laptops.
            </p>
            <div className="home__left__buttons">
              <a href="/download">GET ASHOS</a>
              <a href="/docs">DOCUMENTATION</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="features">
          <h1>Never walk , when you can run</h1>
          {/* <div className="feature_grid">
            <div className="feature">
              <h2>Make Your Job Easier</h2>
              <p>
                ASH OS is designed to make your work easier and faster. It comes
                with a lot of pre-installed softwares and tools that will help
                you get your work done faster.
              </p>
            </div>
            <div className="feature">
              <h2>Make Your Job Easier</h2>
              <p>
                ASH OS is designed to make your work easier and faster. It comes
                with a lot of pre-installed softwares and tools that will help
                you get your work done faster.
              </p>
            </div>
            <div className="feature">
              <h2>Make Your Job Easier</h2>
              <p>
                ASH OS is designed to make your work easier and faster. It comes
                with a lot of pre-installed softwares and tools that will help
                you get your work done faster.
              </p>
            </div>
          </div>
          <div className="feature_grid">
            <div className="feature">
              <h2>Make Your Job Easier</h2>
              <p>
                ASH OS is designed to make your work easier and faster. It comes
                with a lot of pre-installed softwares and tools that will help
                you get your work done faster.
              </p>
            </div>
            <div className="feature">
              <h2>Make Your Job Easier</h2>
              <p>
                ASH OS is designed to make your work easier and faster. It comes
                with a lot of pre-installed softwares and tools that will help
                you get your work done faster.
              </p>
            </div>
          </div> */}
        </div>
      </section>
      <section>
        <div className="laptop">
          <img src={lapPic} alt="" />
        </div>
        <div className="content">
          {/* <h2>GNOME Shell</h2>
          <p>
            Every part of GNOME Shell has been designed to make it simple and
            easy to use. The Activities Overview is an easy way to access all
            your basic tasks. A press of a button is all it takes to view your
            open windows, launch applications, or check if you have new
            messages. Having everything in one place is convenient and means
            that you don't have to learn your way through a maze of different
            technologies.
          </p> */}
        </div>
      </section>
    </>
  );
}

export default Home