import React from "react";

const RoadmapText = () => {
    return (
        <div class="book">
            <input type="checkbox" id="c1" />
            <input type="checkbox" id="c2" />
            <input type="checkbox" id="c3" />
            <div id="cover"><img src="/images/pepe_mag_cover.png" alt="" /></div>
            <div class="flip-book">
                <div class="flip" id="p1">
                    <div class="back">
                        <label class="back-btn" for="c1">Back</label>
                    </div>
                    <div class="front">
                        <img src="/images/boden_mag_cover.png" alt=""/>
                        <label class="next-btn" for="c1">Next</label>
                    </div>
                </div>
                <div class="flip" id="p2">
                    <div class="back">
                        <label class="back-btn" for="c2">Back</label>
                    </div>
                    <div class="front">
                        <img src="/images/ponke_mag_cover.png" alt=""/>
                        <label class="next-btn" for="c2">Next</label>
                    </div>
                </div>
                <div class="flip" id="p3">
                    <div class="back">
                        <label class="back-btn" for="c3">Back</label>
                    </div>
                    <div class="front">
                        <img src="/images/duck_mag_cover.png" alt=""/>
                        <label class="next-btn" for="c3">Next</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapText;