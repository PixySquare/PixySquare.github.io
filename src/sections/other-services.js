/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 1,
    icon: icon4,
    title: 'Product PhotoShoot',
    description: `Treating each and every dish you prepare with astinishing beauty to ensure a good hunger `,
  },
  {
    id: 2,
    icon: icon5,
    title: 'Website Development and Management',
    description: ` We deliver a great website that represents you and your business.`,
  },
  {
    id: 3,
    icon: icon6,
    title: 'Business Enterprise',
    description: `Building a structured environment for you and your business`,
  },
  {
    id: 4,
    icon: icon7,
    title: 'Marketing & advertising',
    description: `Marketing it because we believe it`,
  },
  {
    id: 5,
    icon: icon8,
    title: 'Search Engine Optimization',
    description: `Helping you to be at the top of all the search results out there to find you`,
  },
  {
    id: 6,
    icon: icon9,
    title: 'Socially Sparkling ',
    description: 'handling your social presence and making sure that you shine',
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our services to ponder upon"
          description="Focus only on the Food, we take care of everything else. As soon as you connect with us your restaurant will reach new heights."
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
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
