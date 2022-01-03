import { portfolioImg } from "./PortfolioImg";

const Portfolio = () => {
  return (
    <div className="portfolio container-xxl bg-dark py-5" id="portfolio">
      <h1 className="container-sm text-center display-1 fw-bold  text-light">
        PORTFOLIO
      </h1>
      <div className="img-container ">
        {portfolioImg.map((item) => {
          return <img src={item.img} key={item.id} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
