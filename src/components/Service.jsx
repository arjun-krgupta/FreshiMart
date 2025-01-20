import React from "react";
import { Card, Typography, IconButton } from "@material-tailwind/react";

const services = [
    {
      id: 1,
      icon: "🍎",
      title: "Fresh Fruits",
      description: "Handpicked, juicy, and farm-fresh fruits delivered directly to your doorstep. We ensure high quality, organic options, and seasonal availability to satisfy your health and taste preferences.",
      color: "text-green-500",
    },
    {
      id: 2,
      icon: "🥦",
      title: "Fresh Vegetables",
      description: "Explore our wide variety of farm-fresh vegetables, picked daily to retain their natural nutrients. Our selection ranges from everyday staples to exotic options, ensuring the best for your meals.",
      color: "text-orange-500",
    },
    {
      id: 3,
      icon: "🛒",
      title: "Grocery Essentials",
      description: "One-stop-shop for your grocery needs! From pantry staples to premium ingredients, we offer everything you need to make your meals delightful. Quality and convenience, guaranteed.",
      color: "text-yellow-500",
    },
    {
      id: 4,
      icon: "🥗",
      title: "Ready-to-Cook Packs",
      description: "Simplify your cooking with pre-chopped, measured, and ready-to-cook packs. Perfect for saving time while ensuring delicious and fresh meals every day.",
      color: "text-blue-500",
    },
    {
      id: 5,
      icon: "🚚",
      title: "Fast and Reliable Delivery",
      description: "Get your orders delivered quickly with our efficient logistics. We prioritize timely delivery so you never have to wait long for your fresh groceries.",
      color: "text-red-500",
    },
    {
      id: 6,
      icon: "🌾",
      title: "Organic Products",
      description: "Choose from our range of certified organic products that are free from harmful chemicals and pesticides. Healthier for you and better for the planet.",
      color: "text-green-700",
    },
    // {
    //   id: 7,
    //   icon: "📦",
    //   title: "Subscription Boxes",
    //   description: "Enjoy convenience with our customizable subscription boxes. Choose a plan to receive curated selections of fresh produce and groceries on a schedule that works for you.",
    //   color: "text-teal-500",
    // },
    // {
    //   id: 8,
    //   icon: "🍽️",
    //   title: "Recipe Ideas with Ingredients",
    //   description: "Discover exciting recipes and get all the necessary ingredients in one click. From beginners to pros, we’ve got meal inspiration for everyone.",
    //   color: "text-pink-500",
    // },
    // {
    //   id: 9,
    //   icon: "💬",
    //   title: "24/7 Customer Support",
    //   description: "Our dedicated team is here to assist you at any time. From inquiries to issues, we ensure your shopping experience remains seamless and delightful.",
    //   color: "text-purple-500",
    // },
  ];
  

const Service = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <Typography
          variant="h2"
          className="text-3xl md:text-5xl font-bold text-center mb-8"
        >
          Our Services
        </Typography>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="p-6 shadow-lg hover:shadow-xl transition bg-gray-50"
            >
              <div className={`text-5xl ${service.color} mb-4 text-center`}>
                {service.icon}
              </div>
              <Typography
                variant="h5"
                className="text-xl font-semibold text-gray-900 mb-3 text-center"
              >
                {service.title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-gray-900 text-center"
              >
                {service.description}
              </Typography>
              {/* <div className="mt-4 text-center">
                <IconButton
                  color="green"
                  variant="text"
                  ripple={true}
                  onClick={() => alert(`Learn more about ${service.title}`)}
                >
                  Learn More
                </IconButton>
              </div> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;