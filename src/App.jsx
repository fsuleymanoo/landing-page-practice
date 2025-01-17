import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import CardContainer from "./components/CardContainer.jsx";

function App() {
  const desc = [
    "This is the description of the Card 1",
    "This is the description of the Card 2",
    "This is the description of the Card 3",
  ];

  return (
    <>
      <Nav />
      <Hero />
      <CardContainer>
        <Card
          src="https://picsum.photos/200?random=1"
          titleName="Nice View"
          text={desc[0]}
        />
        <Card
          src="https://picsum.photos/200?random=2"
          titleName="Awesome Image"
          text={desc[1]}
        />
        <Card
          src="https://picsum.photos/200?random=3"
          titleName="Beautiful Picture"
          text={desc[2]}
        />
        <Card
          src="https://picsum.photos/200?random=4"
          titleName="Great Shot"
          text={desc[0]}
        />
        <Card
          src="https://picsum.photos/200?random=5"
          titleName="Clean View"
          text={desc[1]}
        />
        <Card src="https://picsum.photos/200?random=6" text={desc[2]} />
      </CardContainer>
      <Footer />
    </>
  );
}

export default App;
