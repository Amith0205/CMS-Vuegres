import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Adcopies() {
  return (
    <Card style={{ width: '18rem' }}>      
      <Card.Body>
        <Card.Title>Ad 1</Card.Title>
        <Card.Text>
          Get a free sample today.
        </Card.Text>
        <div>
        <Button variant="primary" size="sm">
          Accept
        </Button>{' '}
        <Button variant="secondary" size="sm">
          Decline
        </Button>
      </div>
      </Card.Body>
    </Card>
  );
}

export default Adcopies;