import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const { name, price, features} = option;

    return (
        <div className='bg-blue-300 rounded-md p-4 flex flex-col space-y-1'>
            <h2 className='text-center'>
                <span className="text-5xl font-bold">{price}</span>
                
            </h2>
            <h4 className="text-3xl text-center">{name}</h4>
            <div className='pl-4  flex-grow'>
            {
                features.map((featur, index) => <Feature key={index} feature={featur}></Feature>)
            }
            </div>
            <button className='font-bold text-xl bg-yellow-300 w-full py-2 rounded-md hover:bg-green-500'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.string
}
export default PriceOption;