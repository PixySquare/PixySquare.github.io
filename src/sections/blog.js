/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import Masonry from "react-masonry-component";
import SectionHeading from "components/section-heading";
import BlogPost from "components/cards/blog-post";
import thumb1 from "assets/images/blog/for-web1.jpg";
import thumb2 from "assets/images/blog/for-web2.jpg";
import thumb3 from "assets/images/blog/for-web3.jpg";
import thumb4 from "assets/images/blog/for-web4.jpg";
import thumb5 from "assets/images/blog/for-web5.jpg";
import thumb6 from "assets/images/blog/for-web6.jpg";
import thumb7 from "assets/images/blog/for-web7.jpg";

const data = [
  {
    id: 1,
    slug: "#how-to",
    thumbnail: thumb1,
    showDescription: true,
    title: ``,
    description: ``,
  },
  // {
  //   id: 2,
  //   slug: '#how-to',
  //   thumbnail: thumb6,
  //   showDescription: false,
  //   title: ``,
  //   description: ``,
  // },
  {
    id: 3,
    slug: "#how-to",
    thumbnail: thumb3,
    showDescription: false,
    title: ``,
    description: ``,
  },
  {
    id: 4,
    slug: "#how-to",
    thumbnail: thumb4,
    showDescription: true,
    title: ``,
    description: ``,
  },
  {
    id: 5,
    slug: "#how-to",
    thumbnail: thumb5,
    showDescription: false,
    title: ``,
    description: ``,
  },
  {
    id: 6,
    slug: "#how-to",
    thumbnail: thumb7,
    showDescription: false,
    title: ``,
    description: ``,
  },
  {
    id: 7,
    slug: "#how-to",
    thumbnail: thumb2,
    showDescription: false,
    title: ``,
    description: ``,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Just text is not enough? Here's a SneekPeek of our work"
          description=""
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: "relative",
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
