import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNav = () => {
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchField = e.target.search.value;
    router.push(`/artwork?title=true&q=${searchField}`);
  };

  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-primary">
        <Container>
          <Navbar.Brand>Aayushee Singh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
              <Link href="/search" passHref legacyBehavior><Nav.Link>Advanced Search</Nav.Link></Link>
            </Nav>
            <Form onSubmit={handleSearchSubmit} className="d-flex">
              <FormControl type="text" name="search" placeholder="Search" className="mr-2" />
              <Button type="submit" variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
};

export default MainNav;
