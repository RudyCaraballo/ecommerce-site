
const Catagory = (categoryObj) => {
    console.log(categoryObj);
    const {imgUrl, id, title } = categoryObj.obj
    console.log(title);

  return (
    <div key={id} className="category-container">
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Catagory;
