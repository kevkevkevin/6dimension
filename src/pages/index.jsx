import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"6th Dimensions |  Creative Software Solutions and IT services"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;