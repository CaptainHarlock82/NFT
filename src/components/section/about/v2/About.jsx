import SectionTitle from "../../../../common/sectionTitle";
import Counter from "../../../../common/counter";

import aboutImageLeft from "../../../../assets/images/nft/about_image_left.png";
import aboutImageRight from "../../../../assets/images/nft/about_image_right.png";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./About.style";

const About = () => {
  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="About Us"
          subtitle="THE STORY"
        />
        <div className="v2_about_us_content">
          <div className="v2_about_us_text">
            <p>
            We are a team of talented and dedicated individuals who are passionate about delivering cutting-edge solutions to the crypto industry. Our focus is on developing and implementing new features using the latest in artificial intelligence technology, including the highly-anticipated GPT-4.
            We believe that the future of the crypto industry lies in innovation, and we are committed to leading the way. Our goal is to provide our customers with powerful and easy-to-use tools that leverage the power of AI to help them navigate the complex world of cryptocurrencies. Whether you are a seasoned investor or just starting, our platform is designed to meet your needs.
            </p>
            <p>
            At the heart of our business is a commitment to excellence. We strive to be the best in everything we do, from our development process to our customer support. Our team is comprised of experts in their fields, with extensive experience in AI, crypto, and software development. Together, we work tirelessly to create a platform that delivers unparalleled value to our users.
            We are excited to be on this journey, and we invite you to join us. As we continue to develop and refine our platform, we are always looking for ways to improve and innovate. We believe that by working together, we can create a brighter future for the crypto industry, and we are committed to being at the forefront of this exciting and rapidly-evolving field. Thank you for your support!
            </p>

            <div className="counter-wrap">
              <h4>
                To be minted <Counter end="9999" />{" "}
              </h4>
              <h4>
                Attributes <Counter end="555" />
              </h4>
            </div>
          </div>
          <div className="v2_about_img v2_about_img_left">
            <span>
              <img src={aboutImageLeft} alt="bithu nft about" />
            </span>
          </div>
          <div className="v2_about_img v2_about_img_right">
            <span>
              <img src={aboutImageRight} alt="bithu nft thumb" />
            </span>
          </div>
        </div>

        {/* about card */}
        <AboutInfoCardList />
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
