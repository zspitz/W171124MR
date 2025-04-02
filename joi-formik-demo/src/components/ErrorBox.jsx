const ErrorBox = ({ error }) => {
    const style = {
        height: '1em'
    };
    if (error) { style.color = 'red'; }
    return <div style={style}>{error}</div>;
};

export default ErrorBox;
