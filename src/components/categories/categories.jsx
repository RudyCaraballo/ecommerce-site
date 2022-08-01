import './categories.scss';


const Categories= () => {

    const categories = [
        {
            id: 1,
            title: 'Hats',
            imgUrl: ''
        },
        {
            id: 2,
            title: 'Sneakers',
            imgUrl: ''
        },
        {
            id: 3,
            title: 'Jackets',
            imgUrl: ''
        },
        {
            id: 4,
            title: 'Mens',
            imgUrl: ''
        },
        {
            id: 5,
            title: 'Womens',
            imgUrl: ''
        },
    ]

    return (    
        <div className="categories-container"> 
        {categories.map(({title, id, imgUrl}) => {
        return (
        <div key={id} className='category-container'>
        <div className="background-img" style={{backgroundImage: `url(${imgUrl})`}}/>
            <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
            </div>
        </div> 
        )         
        })}
        </div>  
    )
} 

export default Categories