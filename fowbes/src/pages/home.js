import React from "react";
//how to center text on page using css


const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}
        >
            <h1 className=" text-5xl, font-bold, ">
                Fowbes.
            </h1>
        </div>
    );
};

export default Home;