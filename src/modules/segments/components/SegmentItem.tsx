import React from 'react';
import {Segment} from "../types/Segment";
import "../assets/css/SegmentItem.css";
import {Loader} from "lucide-react";

const SegmentItem = ({segment}: { segment: Segment }) => {
    return (
        <div key={segment.code} className="segment-item">
            <div className="segment-item__inner">


                <div className="segment-item__image icon">
                    {segment.icon ? (
                        <img src={segment.icon} alt={segment.description + ' SVG'}
                             className="w-full h-48 object-contain"/>

                    ) : (
                        <Loader/>
                    )}
                </div>

                <div className="segment-item__info">
                    <h3 className="segment-item__title">
                        {segment.code}<br/>
                        {segment.description}
                    </h3>
                    <p>{segment.size} m</p>
                </div>

                <div className="segment-item__image thumbnail">
                    {segment.image ? (
                        <img
                            src={segment.image}
                            alt={segment.description}
                            className="w-full h-48 object-contain mt-4"
                        />
                    ) : (
                        <Loader/>
                    )}
                </div>

            </div>
        </div>
    );
};

export default SegmentItem;