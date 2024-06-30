import React from 'react';
import {Segment} from "../types/Segment";

const SegmentItem = ({segment}: { segment: Segment }) => {
    return (
        <div key={segment.code} className="bg-white shadow-md p-4">
            <h3 className="text-xl font-bold">{segment.code}</h3>
            {segment.image && (
                <div>
                    <img
                        src={segment.image}
                        alt={segment.description}
                        className="w-full h-48 object-contain mt-4"
                    />
                </div>
            )}
            <p className="text-gray-600">{segment.description}</p>
            {segment.icon && (
                <div className="mt-4">
                    <img src={segment.icon} alt={segment.description + ' SVG'}
                         className="w-full h-48 object-contain"/>
                </div>
            )}
        </div>
    );
};

export default SegmentItem;