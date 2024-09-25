const express = require('express');

const cors = require('cors');
const app = express();
 
app.use(cors());

const products = [
    {id: 1, name: "Laptop", price: 70000, brand: "Dell"},
    {id: 2, name: "Smartphone", price: 80000, brand: "Samsung"},
    {id: 3, name: "Tablet", price: 40000, brand: "Apple"},
    {id: 4, name: "Monitor", price: 20000, brand: "LG" },
    {id: 5, name: "Headphones", price: 200, brand: "Sony" },
    {id: 6, name: "Smartwatch", price: 500, brand: "Garmin" },
    {id: 7,name: "Keyboard", price: 1000, brand: "Logitech" },
    {id: 8, name: "Mouse", price: 600, brand: "HP" },
    {id: 9, name: "External Hard Drive", price: 5000, brand: "Seagate" },
    {id: 10,name: "Webcam", price: 800, brand: "Microsoft" },
    {id: 11, name: "Printer", price: 15000, brand: "Canon"},
    {id: 12, name: "Graphics Card", price: 35000, brand: "NVIDIA"},
    {id: 13, name: "Router", price: 3000, brand: "Netgear"},
    {id: 14, name: "Bluetooth Speaker", price: 4000, brand: "JBL"},
    {id: 15, name: "Game Console", price: 50000, brand: "Sony PlayStation"},
    {id: 16, name: "Drone", price: 60000, brand: "DJI"},
    {id: 17, name: "Action Camera", price: 30000, brand: "GoPro"},
    {id: 18, name: "Smart Light", price: 1500, brand: "Philips Hue"},
    {id: 19, name: "Fitness Tracker", price: 3000, brand: "Fitbit"},
    {id: 20, name: "E-Reader", price: 8000, brand: "Amazon Kindle"},
    {id: 21, name: "VR Headset", price: 40000, brand: "Oculus"},
    {id: 22, name: "Home Security Camera", price: 7000, brand: "Ring"},
    {id: 23, name: "Electric Scooter", price: 25000, brand: "Xiaomi"},
    {id: 24, name: "Portable Power Bank", price: 1200, brand: "Anker"},
    {id: 25, name: "Smart Thermostat", price: 10000, brand: "Nest"},
    {id: 26, name: "Gaming Chair", price: 15000, brand: "Secretlab"},
    {id: 27, name: "Coffee Machine", price: 8000, brand: "Nespresso"},
    {id: 28, name: "Robot Vacuum", price: 25000, brand: "iRobot"},
    {id: 29, name: "Smart Door Lock", price: 9000, brand: "August"},
    {id: 30, name: "Electric Toothbrush", price: 4000, brand: "Oral-B"}
];
  app.get('/products', (req, res) => {
     res.json(products);
  });
    const PORT = 5000;
    app.listen(5000,() => {
        console.log(`Server is running on http://localhost:${5000}`);
    });
