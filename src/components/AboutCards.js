import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";

const { Meta } = Card;

const justifyStyle = {
  textAlign: "justify",
};

const data = [
  {
    id: 1,
    // image: varun,
    name: "MISSION",
    // link: "https://www.linkedin.com/in/ca-varun-darak-adal/",
    description: (
      <div
        className="text-black text-center justify-center text-xl relative lg:pl-6 py-8"
        //style={justifyStyle}
      >
        <p>Deliver tailored staffing solutions that align with our clients goals. Cultivate long-term relationships with businesses and job seekers.</p>
      </div>
    ),
  },
  {
    id: 2,
    // image: jayesh,
    name: "OUR VISION",
    // link: "https://www.linkedin.com/in/jayesh-agarwal-666758220/",
    description: (
      <div
        className="text-black text-center justify-center text-xl relative lg:pl-6 py-8"
        //style={justifyStyle}
      >
        <p>To be a trusted partner for businesses seeking the right talentand a career catalyst for professionals seeking meaningful opportunities.</p>
        </div>
    ),
  },
];

function AboutCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:w-[400px] my-10 border-4 rounded-md bg-[#FFFFFF] p-4"
          >
            {/* <img
              className="w-[60%] rounded-md mt-2 mx-auto"
              src={item.image}
              alt={item.name}
            /> */}
            <div className="flex justify-center">
              <h2 className="text-xl font-bold">{item.name}</h2>
            </div>
            {/* <div className="flex justify-center mt-2">
              <Link to={item.link} target="_blank">
                <AiFillLinkedin
                  className="hover:text-gray-500"
                  style={{
                    fontSize: "30px",
                  }}
                />
              </Link>
            </div> */}
            <div
              className="font-sans text-center justify-center flex-grow "
              style={justifyStyle}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
