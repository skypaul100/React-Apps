//Show Recommendation using bootstrap
//#Took only 3 minutes to built this react app using bootstrap
//o/w earlier using css took 3 hours...
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-center my-5"> Welcome Here</h1>

      <div class="container text-center ">
        <div class="row">
          <div class="col">
            <div class="card">
              <img
                src="https://imgs.search.brave.com/ba4OW6OCvCFouPu0TfDItW8YPlKYRGbYFwd84VyzfaQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/aTNZeUtPSGNZMzBz/MlN3cFljX1hBSGFF/SyZwaWQ9QXBp"
                class="card-img-top"
                alt="img1"
                height="300px"
                width="300px"
              />
              <div class="card-body">
                <h5 class="card-title">Mandalorian</h5>
                <p class="card-text">
                Disney + Hotstar Show
                </p>
                <a href="https://www.hotstar.com/in/shows/the-mandalorian/1260021071?is_paywall_onboarding=true" 
                class="btn btn-primary">
                  Watch Here
                </a>
              </div>
            </div>{" "}
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://imgs.search.brave.com/2JYEEveiC2z8DCv0oMJJvtMDNnfeN9tPEO4BXqoOW8g/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/cUl4Vjg1YmJaQXFl/TERRQjJPZlZRSGFF/SyZwaWQ9QXBp"
                class="card-img-top"
                alt="img2"
                height="300px"
                width="300px"
              />
              <div class="card-body">
                <h5 class="card-title">Punisher</h5>
                <p class="card-text">
                  Disney + Hotstar Show
                </p>
                <a href="https://www.hotstar.com/in/shows/marvels-the-punisher/1260091274?is_paywall_onboarding=true"
                class="btn btn-primary">
                  Watch here
                </a>
              </div>
            </div>{" "}
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://imgs.search.brave.com/eC4Qv2C1GnY8Mn3f0psUjxxEHx7TeU4AI_vZex5-ODs/rs:fit:913:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/b3Y2dnhIZWdEVE5s/a3Z3b2dTRmlRSGFE/MiZwaWQ9QXBp"
                class="card-img-top"
                alt="img3"
                height="300px"
                width="300px"
              />
              <div class="card-body">
                <h5 class="card-title">Moonknight</h5>
                <p class="card-text">
                Disney + Hotstar Show
                </p>
                <a href="https://www.hotstar.com/in/explore?is_paywall_onboarding=true&search_query=moonknight" class="btn btn-primary">
                  Watch Here
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
