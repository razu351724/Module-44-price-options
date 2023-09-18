import PropTypes from 'prop-types';
const Link = ({routex}) => {
    return (
        
        <li className="ml-4 px-6 hover:bg-cyan-500">
            <a href={routex.path}>{routex.name}</a>
        </li>
    );
};

Link.propTypes={
    routex: PropTypes.object
}
export default Link;