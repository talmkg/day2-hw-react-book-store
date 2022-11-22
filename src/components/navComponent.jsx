import Nav from "react-bootstrap/Nav";

function navComponent() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Browse</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default navComponent;
