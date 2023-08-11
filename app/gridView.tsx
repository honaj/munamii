import React from 'react';

interface Thumbnail {
    image: string;
    text: string;
}

interface ThumbnailGridProps {
    thumbnails: Thumbnail[];
}

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({ thumbnails }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {thumbnails.map((thumbnail, index) => (
                <div key={index} className="overflow-hidden shadow-lg">
                    <img className="w-full" src={thumbnail.image} alt={thumbnail.text} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{thumbnail.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ThumbnailGrid;