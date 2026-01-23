import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Section as="div" className="bg-white/5">
        <Container>
          <h2>Section that renders as a div element</h2>
        </Container>
      </Section>
      <Section as="article" id="article-section">
        <Container>
          <h2>Section that renders as an article element</h2>
        </Container>
      </Section>
    </>
  );
}
