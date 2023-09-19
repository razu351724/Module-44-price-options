import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(response => response.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name, 
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            // console.log(phoneWithFakeData)
            setPhones(phoneWithFakeData)
        })
    }, [])

    return (
        <div>
            <h2 className="text-5xl"> phonse:{phones.length}</h2>

            <BarChart width={1000} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          
        </BarChart>
        </div>
    );
};

export default Phones;