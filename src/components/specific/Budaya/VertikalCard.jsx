import React, { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

const VerticalCard = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row mb-5 w-full max-w-3xl">
            <img className="w-full sm:w-1/3 h-48 sm:h-auto object-cover" src={image} alt={title} />
            <div className="p-4 flex flex-col justify-center w-full sm:w-2/3">
                <h2 className="text-xl font-bold mb-2 truncate">{title}</h2>
                <p className="text-gray-700 text-base truncate">{description}</p>
            </div>
        </div>
    );
}

const VerticalCardList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const cards = [
        {
            title: "Card 1",
            description: "Description for Card 1",
            image: "/images/budaya-suling.png"
        },
        {
            title: "Card 2",
            description: "Description for Card 2",
            image: "/images/rampak-bedug.png"
        },
        {
            title: "Card 3",
            description: "Description for Card 3",
            image: "/images/silat.png"
        },
    ];

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const containerStyle = {
        backgroundImage: "url('/images/pattern-destinasi-pilihan.png')",
        backgroundRepeat: 'repeat',
    };

    return (
        <div className="flex flex-col items-center" style={containerStyle}>
            <div className="flex items-center mb-5 w-full sm:w-auto px-4 sm:px-0">
                <div className="bg-white border border-black w-full sm:w-[500px] flex items-center rounded-lg">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 outline-none flex-1 rounded-lg text-black bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="p-2 ml-2 rounded-lg bg-white border border-black">
                    <FunnelIcon className="h-5 w-5" />
                </button>
            </div>
            <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Rekomendasi Budaya</h2>
            <div className="flex flex-col items-center w-full px-4">
                {filteredCards.map((card, index) => (
                    <VerticalCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                    />
                ))}
            </div>
            <hr className="w-full sm:w-[1000px] mt-5" style={{ height: '5px', backgroundColor: 'black', borderRadius: '50px' }} />
        </div>
    );
}

export default VerticalCardList;
