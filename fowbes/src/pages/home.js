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
            <h1 className=" font-bold, text-5xl ">
                Fowbes.
            </h1>
        </div>
    );
};

export default Home;