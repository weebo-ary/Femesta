/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: "Business",
    title: "Grow your business digitally",
    text: "Females will get an opportunity make their own  Website in order to start their own business with low costing hosting etc. in few mins.",
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: "Creative",
    title: "We are real with creative stage",
    text: "Built up a creative stage that permits women to run their own business in advance with less desk work in split minutes.",
  },
  {
    id: 3,
    imgSrc: Award,
    altText: "Best Networking",
    title: "Robust networking platform",
    text: "Decent network to female business which help them for arising their image in the market under the best supervision.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Go Beyond unlimited features"
          description="Focus only on the meaning, we take care of arranging the Mentors. As soon as the meeting end you can Connect with your Mentor on your beloved Social Platform"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
