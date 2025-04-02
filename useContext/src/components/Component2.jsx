import { useContext } from 'react';
import { LangContext } from '../App.jsx';

const Component2 = () => {
    const { lang } = useContext(LangContext);
    return (
        <div>
            <h1>{lang === 'en' ? 'Child component 2' : 'קומפוננט בן 2'}</h1>
        </div>
    );
};

export default Component2;
