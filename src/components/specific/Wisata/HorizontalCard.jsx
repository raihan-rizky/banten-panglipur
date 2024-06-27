const HorizontalCard = ({ title, description, image }) => {
    return (
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-1/3 h-48 object-cover" src={image} alt={title} />
            <div className="w-2/3 p-4">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}

export default HorizontalCard;