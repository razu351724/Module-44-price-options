import { BarChart, Bar, XAxis, YAxis,  Tooltip,  } from 'recharts';
// import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Audio, Radio,Bars } from  'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        })
    }, [])

    return (
        <div>

           { loading && <div>
            <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
            />
            <Radio
  visible={true}
  height="80"
  width="80"
  ariaLabel="radio-loading"
  wrapperStyle={{}}
  wrapperClass="radio-wrapper"
/>
            </div>
           }

<Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
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