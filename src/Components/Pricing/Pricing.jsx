import "./pricing.css";
import { TiTickOutline } from "react-icons/ti";
const Pricing = () => {
  return (
    <>
      <h4 className="pricing-text-simple">Pricing</h4>
      <h1 className="pricing_heading">Simple , Transparent Pricing</h1>
      <p className="pricing_para">
        We believe Untitled Should be accessible to all companies, no matter the
        size
      </p>

      {/* -------------------------------------------------------------------------- */
      /*                              pricing container                             */
      /* -------------------------------------------------------------------------- */}

      {/* pricing container -- 1*/}

      <div className="main-pricing-container">
        <div className="pricing-containers">
          <div className="pricing-container-child-1">
            <h1>10$/mth</h1>
            <h4 className="basic-plan-text">Basic Plan</h4>
            <h4>Billed annualy</h4>
          </div>
          <div className="pricing-container-disc">
            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>

            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>

            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>

            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>

            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>
          </div>

          <div className="pricing-btn-container">
            <button className="pricing-btn">Get Started</button>
          </div>
        </div>

        {/* pricing container -- 2*/}

        <div className="pricing-containers">
          <div className="pricing-container-child-1">
            <h1>20$/mth</h1>
            <h4 className="basic-plan-text">Business Plan</h4>
            <h4>Billed annualy</h4>
          </div>
          <div className="pricing-container-disc">
            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>
            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>
            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>
            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>
            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>
          </div>

          <div className="pricing-btn-container">
            <button className="pricing-btn">Get Started</button>
          </div>
        </div>

        {/* pricing container -- 3 */}

        <div className="pricing-containers">
          <div className="pricing-container-child-1">
            <h1>40$/mth</h1>
            <h4 className="basic-plan-text">Enterprise Plan</h4>
            <h4>Billed annualy</h4>
          </div>

          <div className="pricing-container-disc">
            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>

            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>

            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>

            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>

            <div className="pricing-container-disc-child">
              <TiTickOutline className="pricing-disc-icon" />
              <h5 className="pricing-disc-text">
                Access to all basic Features
              </h5>
            </div>
          </div>

          <div className="pricing-btn-container">
            <button className="pricing-btn">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
