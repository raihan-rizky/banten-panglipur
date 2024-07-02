import React, { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline'; // Menggunakan icon filter

const VerticalCard = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-5" style={{ height: '150px', width: '800px' }}>
            <img className="w-full md:w-1/3 h-48 md:h-full object-cover" src={image} alt={title} />
            <div className="p-4 flex flex-col justify-center w-full md:w-2/3">
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
            <div className="flex items-center mb-5">
                <div className="bg-white border border-black w-[500px] flex items-center rounded-lg">
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
            <h2 className="text-2xl font-bold mb-5">Rekomendasi Budaya</h2>
            {filteredCards.map((card, index) => (
                <VerticalCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                />
            ))}
            <hr className="w-[1000px]" style={{ height: '5px', backgroundColor: 'black', borderRadius: '50px' }} />
        </div>
    );
}

export default VerticalCardList;
