import React from 'react'

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory}) {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                { items &&
                items.map( 
                    (item, index) => 
                        <li onClick={() => onClickCategory(index) } 
                            key={`${item}_${index}`}
                            className={activeCategory === index ? 'active' : ''}
                        >
                            {item}
                        </li> 
                )}
            </ul>
        </div>
        
    )
});

export default Categories;