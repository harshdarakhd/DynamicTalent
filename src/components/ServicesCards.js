import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import RPO from "../assets/RPO.jpg";
import HRAdv from "../assets/HRServices.jpg";
import ContractStaffing from "../assets/Contract.jpg";
import ExecutiveSearch from "../assets/ExecutiveSearch.jpg";
import PermanentRecruitment from "../assets/Permanent_.jpg";

const { Meta } = Card;

const data = [
    {
        id: 1,
        title: "Recruitment Process Outsourcing",
        image: RPO,
    },
    {
        id: 2,
        title: "HR Advisory",
        image: HRAdv,
    },
    {
        id: 3,
        title: "Contract Staffing",
        image: ContractStaffing,
    },
    {
        id: 4,
        title: "Executive Search",
        image: ExecutiveSearch,
    },
    {
        id: 5,
        title: "Permanent Recruitment",
        image: PermanentRecruitment,
    }
];

function ServicesCard() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
            {data.map((item) => {
                return (
                    <div className="md:w-[350px] h-[350px] flex flex-col mx-5 my-10 border-4 p-3 bg-[#FFFFFF] ">
                        <h1 className="text-lg text-center font-semibold">{item.title}</h1>
                        <img
                            className="w-[85%] h-[75%] rounded-md mt-2 mx-auto"
                            src={item.image}
                        />
                        {/* <p className="mt-4 font-sans text-center">To Know More</p> */}
                        <Link
                            to={`/services/${item.title}`}
                            className="text-black-500 mt-2 text-center hover:text-gray-500"
                        >
                            Read More
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default ServicesCard;