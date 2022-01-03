import { CardItems } from "./CardItems";

const Card = () => {
  return (
    <div className="d-flex flex-row justify-content-around   row">
      {CardItems.map((item) => {
        return (
          <div className="box col-md-3 col-7 my-5 " key={item.id}>
            <h1 className=" text-center fw-bold  ">{item.title}</h1>
            <p className="mt-3">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
