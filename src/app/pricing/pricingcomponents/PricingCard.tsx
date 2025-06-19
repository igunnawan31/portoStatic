interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
}

const PricingCard = ({ title, price, features, ctaText, ctaLink }: PricingCardProps) => {
    return (
        <div className="border rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-blue-700 text-2xl font-semibold mb-4">{price}</p>
            <ul className="text-left mb-6 space-y-1 text-sm">
                {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                    ✅ {feature}
                </li>
                ))}
            </ul>
            <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
                {ctaText}
            </a>
        </div>
    );
};

export default PricingCard;
