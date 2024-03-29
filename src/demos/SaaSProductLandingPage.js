import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import dorra from "../images/dorra.jpeg";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our{" "}
            <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description:
              "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description:
              "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
      />
      <Testimonial
        subheading={<Subheading>OUR TEAM</Subheading>}
        heading={
          <>
            Meet our <HighlightedText>minds.</HighlightedText>
          </>
        }
        testimonials={[
          {
            profileImageSrc: dorra,
            heading: "Let us introduce ourselves!",
            quote:
              "As the head of our data science team, Dorra brings a wealth of expertise in data analytics, machine learning, and artificial intelligence. With a Ph.D. in computer science and plenty of experience in the field, Dorra has been instrumental in shaping our organization's data strategy and driving innovation through data-driven insights.",
            customerName: "Dorra Trabelsi",
            customerTitle: "ESPRIT",
          },
          {
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Let us introduce ourselves!",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC",
          },
        ]}
      />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
};
