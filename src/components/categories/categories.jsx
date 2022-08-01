import "./categories.scss";
import Catagory from "../catagory-item/catagory";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imgUrl: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      title: "Sneakers",
      imgUrl: "https://images.unsplash.com/photo-1552066344-2464c1135c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      title: "Jackets",
      imgUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 4,
      title: "Mens",
      imgUrl: "https://images.unsplash.com/photo-1519758340474-40fa8cba6584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 5,
      title: "Womens",
      imgUrl: "https://images.unsplash.com/photo-1607749101678-01b521ae7900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((categoryObj) => <Catagory key= {categoryObj.id} obj={categoryObj} />)}
    </div>
  );
};

export default Categories;
