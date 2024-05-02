import { ProductCardComponent } from './ProductCard.component.tsx';

import styles from './products-list.module.css';

export const ProductsListComponent = () => {
    const productData = {
        id: 1,
        title: 'Majestic Mountain Graphic T-Shirt',
        price: 44,
        description:
            'Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.',
        images: ['https://i.imgur.com/QkIa5tT.jpeg', 'https://i.imgur.com/jb5Yu0h.jpeg', 'https://i.imgur.com/UlxxXyG.jpeg'],
        creationAt: '2024-04-26T08:20:47.173Z',
        updatedAt: '2024-04-26T08:20:47.173Z',
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: '2024-04-26T08:20:47.094Z',
            updatedAt: '2024-04-26T08:20:47.094Z',
        },
    };

    return (
        <ul className={styles.productsList}>
            {[...Array.from({ length: 8 }).keys()].map((_, index) => (
                <li className={styles.productListItem} key={index}>
                    <ProductCardComponent key={index} {...productData} />
                </li>
            ))}
        </ul>
    );
};
