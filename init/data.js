const sampleListings = [
    {
        "title": "Rawalpindi Lake View House",
        "description": "Enjoy a serene stay at this beautiful house near Rawalpindi's lake, offering scenic views and modern amenities.",
        "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=800&h=600",
        "price": 5500,
        "location": "Rawalpindi",
        "country": "Pakistan"
    },
    {
        "title": "Islamabad Hilltop Villa",
        "description": "Stay at this charming villa on the hills of Islamabad, offering panoramic views and a relaxing environment.",
        "image": "https://images.unsplash.com/photo-1571323055336-63f7f67edb2f?fit=crop&w=800&h=600",
        "price": 6200,
        "location": "Islamabad",
        "country": "Pakistan"
    },
    {
        "title": "Lahore Garden Retreat",
        "description": "Relax in this elegant retreat in Lahore, featuring lush gardens and luxurious accommodations.",
        "image": "https://images.unsplash.com/photo-1571820785606-104bf1c3b4f4?fit=crop&w=800&h=600",
        "price": 6000,
        "location": "Lahore",
        "country": "Pakistan"
    },
    {
        "title": "Faisalabad Farmhouse",
        "description": "Experience countryside charm at this spacious farmhouse in Faisalabad, perfect for family gatherings and relaxation.",
        "image": "https://images.unsplash.com/photo-1607432752696-df79f86e2061?fit=crop&w=800&h=600",
        "price": 5700,
        "location": "Faisalabad",
        "country": "Pakistan"
    },
    {
        "title": "Peshawar Historic Mansion",
        "description": "Stay at this historic mansion in Peshawar, blending traditional charm with modern comforts.",
        "image": "https://images.unsplash.com/photo-1544555795-2185ed08c782?fit=crop&w=800&h=600",
        "price": 5900,
        "location": "Peshawar",
        "country": "Pakistan"
    },
    {
        "title": "Multan Royal Residence",
        "description": "Experience royalty at this opulent residence in Multan, featuring luxurious accommodations and beautiful gardens.",
        "image": "https://images.unsplash.com/photo-1554446785-bd08d69cfb12?fit=crop&w=800&h=600",
        "price": 6800,
        "location": "Multan",
        "country": "Pakistan"
    },
    {
        "title": "Quetta Mountain Retreat",
        "description": "Enjoy stunning mountain views at this retreat in Quetta, ideal for nature lovers and adventure seekers.",
        "image": "https://images.unsplash.com/photo-1567173391-f7a9a7db0eb8?fit=crop&w=800&h=600",
        "price": 6300,
        "location": "Quetta",
        "country": "Pakistan"
    },
    {
        "title": "Sialkot Countryside Villa",
        "description": "Relax at this peaceful countryside villa in Sialkot, offering a tranquil setting and modern amenities.",
        "image": "https://images.unsplash.com/photo-1531973859716-b8fc6a94e629?fit=crop&w=800&h=600",
        "price": 5500,
        "location": "Sialkot",
        "country": "Pakistan"
    },
    {
        "title": "Hyderabad Heritage Home",
        "description": "Experience the charm of this heritage home in Hyderabad, featuring classic architecture and modern comforts.",
        "image": "https://images.unsplash.com/photo-1566035753-bf46e660c665?fit=crop&w=800&h=600",
        "price": 5800,
        "location": "Hyderabad",
        "country": "Pakistan"
    },
    {
        "title": "Rawalakot Hilltop Lodge",
        "description": "Stay at this cozy hilltop lodge in Rawalakot, offering panoramic mountain views and a relaxing retreat.",
        "image": "https://images.unsplash.com/photo-1570567288314-4a4ad5c58b5e?fit=crop&w=800&h=600",
        "price": 6000,
        "location": "Rawalakot",
        "country": "Pakistan"
    },
    {
        "title": "Murree Resort House",
        "description": "Enjoy a mountain getaway at this resort house in Murree, offering stunning views and luxurious accommodations.",
        "image": "https://images.unsplash.com/photo-1534425086606-708c0a8fd37e?fit=crop&w=800&h=600",
        "price": 6500,
        "location": "Murree",
        "country": "Pakistan"
    },
        {
            "title": "Skardu Mountain Lodge",
            "description": "Experience breathtaking views and tranquility at this mountain lodge in Skardu, perfect for adventure and relaxation.",
            "image": "https://images.unsplash.com/photo-1593703581180-9f5b6465bbd2?fit=crop&w=800&h=600",
            "price": 7000,
            "location": "Skardu",
            "country": "Pakistan"
        },
        {
            "title": "Murree Hills Chalet",
            "description": "Stay in comfort at this charming chalet in Murree Hills, offering panoramic views and cozy accommodations.",
            "image": "https://images.unsplash.com/photo-1553146754-c4498e8d81d4?fit=crop&w=800&h=600",
            "price": 6500,
            "location": "Murree",
            "country": "Pakistan"
        },
        {
            "title": "Chitral Valley Retreat",
            "description": "Relax at this scenic retreat in Chitral Valley, providing stunning mountain views and serene surroundings.",
            "image": "https://images.unsplash.com/photo-1607570987342-73ab50b2c9d7?fit=crop&w=800&h=600",
            "price": 6800,
            "location": "Chitral",
            "country": "Pakistan"
        },
        {
            "title": "Balochistan Desert Oasis",
            "description": "Experience the unique beauty of Balochistan at this desert oasis, offering a luxurious stay amidst stunning landscapes.",
            "image": "https://images.unsplash.com/photo-1595199278280-13f4d6919d29?fit=crop&w=800&h=600",
            "price": 5500,
            "location": "Balochistan",
            "country": "Pakistan"
        },
        {
            "title": "Nathia Gali Mountain Cottage",
            "description": "Enjoy a cozy stay at this mountain cottage in Nathia Gali, with beautiful views and comfortable amenities.",
            "image": "https://images.unsplash.com/photo-1580729610083-01fcdf1b7a9e?fit=crop&w=800&h=600",
            "price": 6000,
            "location": "Nathia Gali",
            "country": "Pakistan"
        },
        {
            "title": "Abbottabad Hill Retreat",
            "description": "Stay at this tranquil hill retreat in Abbottabad, featuring stunning views and a peaceful environment.",
            "image": "https://images.unsplash.com/photo-1564306331-f2f4b65b31b1?fit=crop&w=800&h=600",
            "price": 6200,
            "location": "Abbottabad",
            "country": "Pakistan"
        },
        {
            "title": "Dera Ismail Khan Farmhouse",
            "description": "Experience rural charm at this spacious farmhouse in Dera Ismail Khan, perfect for relaxation and family gatherings.",
            "image": "https://images.unsplash.com/photo-1546722101-5f91a6f3cf80?fit=crop&w=800&h=600",
            "price": 5700,
            "location": "Dera Ismail Khan",
            "country": "Pakistan"
        },
        {
            "title": "Sawat River House",
            "description": "Relax at this beautiful river house in Swat, offering stunning river views and modern comforts.",
            "image": "https://images.unsplash.com/photo-1600310426428-f15eae7c15d8?fit=crop&w=800&h=600",
            "price": 5900,
            "location": "Swat",
            "country": "Pakistan"
        },
        {
            "title": "Kotli Hilltop Lodge",
            "description": "Enjoy a scenic stay at this hilltop lodge in Kotli, providing breathtaking views and a cozy atmosphere.",
            "image": "https://images.unsplash.com/photo-1596569366546-0661b6ed4388?fit=crop&w=800&h=600",
            "price": 6100,
            "location": "Kotli",
            "country": "Pakistan"
        },
        {
            "title": "Jhelum Lake House",
            "description": "Experience tranquility at this serene lake house in Jhelum, featuring beautiful lake views and comfortable amenities.",
            "image": "https://images.unsplash.com/photo-1562185165-6f6c67d58516?fit=crop&w=800&h=600",
            "price": 5800,
            "location": "Jhelum",
            "country": "Pakistan"
        }
    
]

;
module.exports = { data: sampleListings };