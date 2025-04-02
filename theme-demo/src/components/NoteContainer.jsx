import { useContext } from 'react';
import { ThemeContext } from '../App.jsx';

const TextContainer = () => {
    const { theme } = useContext(ThemeContext);

    const style =
        theme === 'light' ?
            {
                backgroundColor: 'darkgray',
                color: 'lightgray'
            } :
            {
                backgroundColor: 'lightgray',
                color: 'darkgray'
            };

    return (
        <p style={style}>Hello world</p>
    );
};

export default TextContainer;
