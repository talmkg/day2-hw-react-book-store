import Card from "react-bootstrap/Card";

function footerComponent() {
  return (
    <Card className="text-center bg-dark text-light">
      <Card.Body>
        <Card.Title>Yeah</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eaque
          dolores sapiente consectetur?
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default footerComponent;
