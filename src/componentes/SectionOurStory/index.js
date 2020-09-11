import React from 'react';

import './style.css';

export default function SectionOurStory() {
    return (
        <section className="OurStory">
            
            <div className="text-story">
                <h1>Nossa <span>história</span></h1>
            </div>

            <h2 className="years">2017</h2>

            <div className="sliderStory">
                <div class="slider-story">
                    <div class="slider__prev"></div>
                    <div class="slider__next"></div>
                    <div class="slider__stream">
                        <div class="slider__item bg-1"></div>
                        <div class="slider__item bg-2"></div>
                        <div class="slider__item bg-3">
                            teste
                        </div>
                        <div class="slider__item bg-4"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}