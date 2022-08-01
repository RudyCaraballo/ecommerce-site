
const Category = () => {
    const categories = [
        'Hats',
        'Sneakers',
        'Jackets',
        'Mens',
        'Womens'
    ]

    return (   
        categories.map((cat, index) => {
        return (
        <div className='categories-container'>
        <div className="background-img"/>
            <div className='individual-category'>
            <h2>{cat}</h2>
            <p>Shop Now</p>
            </div>
        </div>          
        )
        })
    )
} 

export default Category