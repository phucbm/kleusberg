import React, {useEffect, useState} from 'react';
import segmentsData from '../data/segments.json';
import {Segment} from '../types/Segment';
import SegmentItem from "./SegmentItem";

// Dynamically import all images and SVGs
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg,webp}');
const svgs = import.meta.glob('../assets/svg/*.svg');

const loadAssets = async () => {
    const assetMap: { [key: string]: string } = {};

    const loadImagePromises = Object.keys(images).map(async (path) => {
        const module = await images[path]();
        const assetName = path.split('/').pop();
        if (assetName) {
            assetMap[assetName] = module.default;
        }
    });

    const loadSvgPromises = Object.keys(svgs).map(async (path) => {
        const module = await svgs[path]();
        const assetName = path.split('/').pop();
        if (assetName) {
            assetMap[assetName] = module.default;
        }
    });

    await Promise.all([...loadImagePromises, ...loadSvgPromises]);

    return assetMap;
};

const SegmentsListing: React.FC = () => {
        const [loadedAssets, setLoadedAssets] = useState<{ [key: string]: string }>({});

        useEffect(() => {
            loadAssets().then(setLoadedAssets);
        }, []);

        return (
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {(segmentsData as Segment[]).map((segment) => {
                        segment.icon = loadedAssets[segment.code + '.svg'];
                        segment.image = loadedAssets[segment.code + '.webp'];

                        return <SegmentItem segment={segment}/>;
                    })}
                </div>
            </div>
        );
    }
;

export default SegmentsListing;