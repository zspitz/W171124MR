import { useParams } from 'react-router';

const ProductView = () => {
    const { id } = useParams();
    return (
        <p>תצות מוצר בודד {id}</p>
    );
};

export default ProductView;
