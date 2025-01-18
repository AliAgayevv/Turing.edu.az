import "./btn.css";

const ApplyNowBtn = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <button className="btn">
          <div className="btn__bg">
            <span className="btn__bg__layer btn__bg__layer-first"></span>
            <span className="btn__bg__layer btn__bg__layer-second"></span>
            <span className="btn__bg__layer btn__bg__layer-third"></span>
          </div>

          <span className="btn__text-out">Apply Now</span>
          <span className="btn__text-in">Apply Now</span>
        </button>
      </div>
    </div>
  );
};

export default ApplyNowBtn;
