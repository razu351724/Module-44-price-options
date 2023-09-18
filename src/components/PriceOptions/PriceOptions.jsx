import PriceOption from "../PriceOption/PriceOption";

const priceOptions = [
    {
      "id": 1,
      "name": "Regular Eggs",
      "price": "$2.99/dozen",
      "features": [
        "Farm-fresh eggs",
        "Standard size and grade",
        "Brown or white eggs available",
        "No added hormones or antibiotics",
        "Sourced locally"
      ]
    },
    {
      "id": 2,
      "name": "Organic Eggs",
      "price": "$4.99/dozen",
      "features": [
        "Certified organic eggs",
        "Free-range chickens",
        "Non-GMO feed",
        "Brown or white eggs available",
        "No added pesticides or synthetic fertilizers",
        "Environmentally friendly farming practices"
      ]
    },
    {
      "id": 3,
      "name": "Premium Eggs",
      "price": "$6.99/dozen",
      "features": [
        "Farm-to-table premium eggs",
        "Organic and free-range",
        "Large-sized eggs",
        "Specialty egg colors (blue, green, etc.)",
        "High omega-3 content",
        "No caged chickens"
      ]
    }
  ]


const PriceOptions = () => {

    return (
        <div>
            <h3 className="text-5xl">Best Prices in the town</h3>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 m-12">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;