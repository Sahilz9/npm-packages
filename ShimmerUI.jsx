// shimmer card unit
const shimmer_card_unit = 20;

// shimmer Menu card unit
const shimmer_menu_card_unit = 4;

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details">
          <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate"></div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            {Array(shimmer_menu_card_unit)
              .fill("")
              .map((element, index) => (
                <div className="shimmer-menu-card" key={index}>
                  <div className="shimmer-item-details">
                    <h3 className="shimmer-w40  stroke animate"></h3>
                    <p className="shimmer-w20  stroke animate"> </p>
                    <p className="shimmer-w60  stroke animate"></p>
                  </div>
                  <div className="shimmer-img-wrapper">
                    <img className="shimmer-img stroke animate" />
                    <div className="shimmer-btn"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(shimmer_card_unit)
        .fill("")
        .map((element, index) => {
          return <CardShimmer key={index} />;
        })}
    </div>
  );
};
export default Shimmer;

// CSS Code for Shimmer

/*Shimmer Card CSS Start*/
// .shimmer-container {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 25px;
//     justify-content: center;
//   }

//   .shimmer-card {
//     flex-basis: 250px;
//     padding: 10px;
//     margin-bottom: 10px;
//     border-color: #d3d5df;
//     box-shadow: 0 4px 7px 0 rgb(218 220 230 / 60%);
//   }

//   .shimmer-title {
//     width: 60%;
//     margin-top: 10px;
//   }

//   .shimmer-tags {
//     width: 80%;
//     margin-top: 4px;
//   }

//   .shimmer-details {
//     width: 100%;
//     margin-top: 18px;
//   }

//   .shimmer-container .shimmer-img {
//     height: 144px;
//     width: 230px;
//   }
/*Shimmer Card CSS End*/

/* Shimmer Menu Card CSS Start */

//   .restaurant-summary .shimmer-img {
//     height: 144px;
//     width: 230px;
//   }

//   .shimmer-menu-card {
//     display: flex;
//     justify-content: space-evenly;
//     width: 848px;
//     padding: 10px;
//     margin-bottom: 10px;
//     border-color: #d3d5df;
//     box-shadow: 0 4px 7px 0 rgb(218 220 230 / 60%);
//   }

//   .shimmer-item-details {
//     width: 438px;
//   }

//   .shimmer-img-wrapper {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-end;
//     width: 118px;
//     height: 150px;
//   }

//   .shimmer-img-wrapper .shimmer-img {
//     width: 118px;
//     height: 96px;
//   }

//   .shimmer-img-wrapper .shimmer-btn {
//     width: 94px;
//     height: 34px;
//     margin-top: 10px;
//   }

//   .shimmer-w60 {
//     width: 60%;
//     margin-top: 10px;
//   }

//   .shimmer-w40 {
//     width: 40%;
//     margin-top: 10px;
//   }

//   .shimmer-w20 {
//     width: 20%;
//     margin-top: 4px;
//   }
/* Shimmer Menu Card CSS End */

/*Animation to Shimmer Component Card and Menu card Start*/
//   .stroke {
//     height: 15px;
//     background: #777;
//   }

//   .stroke-color {
//     background: #777;
//   }

//   .animate {
//     animation: shimmer 3s;
//     animation-iteration-count: infinite;
//     background: linear-gradient(to right, #e6e6e6 5%, #cccccc 25%, #e6e6e6 35%);
//     background-size: 1000px 100%;
//   }

//   @keyframes shimmer {
//     from {
//       background-position: -1000px 0;
//     }
//     to {
//       background-position: 1000px 0;
//     }
//   }
