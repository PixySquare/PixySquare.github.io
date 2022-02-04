/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Product Photoshoot',
    description: "Get your product's photoshoot done at your doorstep. ",
  },
  {
    id: 3,
    icon: icon2,
    title: 'Website Management',
    description: `Allow us to write your creativity on your own website.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Digital Marketing',
    description: `We'll take care of posting content and making sure that you grow.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Grow your Restaurant with our Services"
          description="Give us all your headache, and you just cook fantastic food like always. We will turn your restaurant into a successful business model."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};