import React from "react";

const RoadmapText = () => {
    return (
        <div class="book">
            <input type="checkbox" id="c1" />
            <input type="checkbox" id="c2" />
            <input type="checkbox" id="c3" />
            <div id="cover"><img src="/images/f_mag_cover.png" alt="" /></div>
            <div class="flip-book">
                <div class="flip" id="p1">
                    <div class="back">
                        <img src="/images/FASE1.png" alt="" />
                        <label class="back-btn" for="c1"><img class="arrow" src="/images/b_arrow.png" alt=""/></label>
                    </div>
                    <div class="front">
                        <img src="/images/roadmap_mag_cover.png" alt=""/>
                        <label class="next-btn" for="c1"><img class="arrow" src="/images/n_arrow.png" alt=""/></label>
                    </div>
                </div>
                <div class="flip" id="p2">
                    <div class="back">
                    <img src="/images/FASE3.png" alt="" />
                        <label class="back-btn" for="c2"><img src="/images/b_arrow.png" alt=""/></label>
                    </div>
                    <div class="front">
                        <img src="/images/FASE2.png" alt="" />
                        <label class="next-btn" for="c2"><img class="arrow" src="/images/n_arrow.png" alt=""/></label>
                    </div>
                </div>
                <div class="flip" id="p3">
                    <div class="back">
                        <img src="/images/f_mag_cover.png" alt="" />
                        <label class="back-btn" for="c3"><img src="/images/b_arrow.png" alt=""/></label>
                    </div>
                    <div class="front">
                        <img src="/images/FASE4.png" alt="" />
                        <label class="next-btn" for="c3"><img class="arrow" src="/images/n_arrow.png" alt=""/></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapText;