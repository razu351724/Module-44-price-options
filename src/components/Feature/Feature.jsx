import { ImCheckboxChecked } from 'react-icons/im'

import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center al'> <ImCheckboxChecked className='text-yellow-300 mr-'></ImCheckboxChecked>{feature}</p>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}

export default Feature;