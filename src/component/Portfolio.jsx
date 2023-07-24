import React from "react";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="portfolio">
        <div class="container">
          <h1 class="sub-title">My Portfolio</h1>
          <div class="work-list">
            <div class="work">
              <img src="img/ecom.png" alt="work-1" className="port-img" />
              <div class="layer">
                <h3>FlashCart Ecommerce</h3>
                <p>FlashCart is Ecom app made on Next js Technology</p>
                <a href="https://flashcart.vercel.app/" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div class="work">
              <img src="img/hotstar.png" alt="work-3" className="port-img" />
              <div class="layer">
                <h3>Hotstar UI</h3>
                <p>This is Hotstar Ui app wher I use Firebse Login system</p>
                <a
                  href="https://hotstar-vikash.netlify.app/home"
                  target="_blank"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div class="work">
              <img src="img/xolo.png" alt="work-3" className="port-img" />
              <div class="layer">
                <h3>XOlO</h3>
                <p>XOLO a fashion website which are Ui rich Website</p>
                <a
                  href="https://fashionstudio.netlify.app/"
                  target="_blank"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div class="work">
              <img src="img/freelance.png" alt="work-2" className="port-img" />
              <div class="layer">
                <h3>FreeLancer</h3>
                <p>A Freelancer website made on React.js</p>
                <a
                  href="https://vikash7379.github.io/FreelanceSite.ReactJS/"
                  target="_blank"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div class="work">
              <img src="img/weather.png" alt="work-3" className="port-img" />
              <div class="layer">
                <h3>Weather</h3>
                <p>
                  A weather App where you can search any weather report of any
                  place in the world.
                </p>
                <a
                  href="https://gleaming-kheer-80b9f6.netlify.app/"
                  target="_blank"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div class="work">
              <img src="img/todolist.png" alt="work-3" className="port-img" />
              <div class="layer">
                <h3>ToDo List</h3>
                <p>A ToDo List where you can Create To Do . made on React.js</p>
                <a
                  href="https://github.com/vikash7379/ToDo-List"
                  target="_blank"
                >
                  <i class="fas fa-external-link-alt" target="_blank"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
