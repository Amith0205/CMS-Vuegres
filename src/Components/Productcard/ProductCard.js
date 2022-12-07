import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from '../../img/images.png'

function ProductCard() {
    return (
        <Card style={
            { width: '18rem' }
        }>
            <Card.Img variant="top"
                src={photo} />
            <Card.Body>
                <Card.Title style={
                    { color: "black" }
                }>Collateral</Card.Title>
                <Card.Text style={
                    { color: "black" }
                }>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="dark"
                    href={'/product'}>View More</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
