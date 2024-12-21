import Container from './common/Container';
import Section from './common/Section';
import SectionTitle from './common/SectionTitle';
import ServiceList from './services/ServiceList';

export default function Services() {
  return (
    <Section id="services" background="light">
      <Container>
        <SectionTitle
          title="Services We Offer"
          subtitle="Enhance Customer Experience, Enhance Returns with our comprehensive range of IT solutions"
          centered={false}
        />

        <ServiceList />
      </Container>
    </Section>
  );
}