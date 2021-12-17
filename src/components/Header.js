import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({ title , onAdd ,showAdd}) => {
    return (
        <header className='header'>
            <h1 class='title'>{title}</h1>
            <Button color={showAdd ? 'red' :'#4E9F3D'} text={showAdd? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )};
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
