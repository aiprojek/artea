import React, { useRef, useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { MENU_DATA } from '../constants';
import type { MenuCategory } from '../types';

const ChevronLeftIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const CategoryCard: React.FC<{ category: MenuCategory }> = ({ category }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
        <img className="w-full aspect-square object-cover" src={category.image} alt={category.name} />
        <div className="p-4 flex flex-col flex-grow">
            <h4 className="text-xl font-semibold text-artea-dark">{category.name}</h4>
            <p className="text-gray-600 mt-1 text-sm flex-grow">{category.description}</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <h5 className="text-sm font-bold text-artea-dark mb-2">Pilihan Menu:</h5>
                <ul className="text-sm space-y-1.5">
                    {category.items.map((item) => (
                        <li key={item.name} className="text-gray-700 flex items-center">
                            - {item.name}
                            {item.isBestSeller && (
                                <span className="ml-2 text-xs font-semibold bg-artea-green text-white px-2 py-0.5 rounded-full">
                                    Terlaris
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const Menu: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const itemRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

    const checkScrollability = () => {
        const el = scrollContainerRef.current;
        if (el) {
            const isScrollable = el.scrollWidth > el.clientWidth;
            setCanScrollLeft(el.scrollLeft > 5);
            setCanScrollRight(isScrollable && el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
        }
    };

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (el) {
            checkScrollability();
            el.addEventListener('scroll', checkScrollability, { passive: true });
            window.addEventListener('resize', checkScrollability);
        }

        return () => {
            if (el) {
                el.removeEventListener('scroll', checkScrollability);
                window.removeEventListener('resize', checkScrollability);
            }
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        const el = scrollContainerRef.current;
        if (el) {
            const scrollAmount = el.clientWidth * 0.8;
            el.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            setActiveCategory('all');
        }
    };

    const handleFilterClick = (categoryName: string) => {
        setActiveCategory(categoryName);
        if (categoryName === 'all') {
             scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
             return;
        }
        const targetItem = itemRefs.current[categoryName];
        if (targetItem && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const containerLeft = container.getBoundingClientRect().left;
            const targetLeft = targetItem.getBoundingClientRect().left;
            const scrollLeft = container.scrollLeft;

            const offset = 16; // Corresponds to half of the gap (gap-8 -> 2rem -> 32px / 2 = 16px)

            container.scrollTo({
                left: scrollLeft + targetLeft - containerLeft - offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="menu" className="py-20 bg-artea-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Menu Pilihan" subtitle="Dibuat spesial hanya untuk Anda" />

                <div className="mb-8 flex justify-center flex-wrap gap-2">
                    <button
                        onClick={() => handleFilterClick('all')}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeCategory === 'all' ? 'bg-artea-green text-white shadow' : 'bg-white text-artea-dark hover:bg-artea-light-green'}`}
                    >
                        Semua
                    </button>
                    {MENU_DATA.map(cat => (
                         <button
                            key={cat.name}
                            onClick={() => handleFilterClick(cat.name)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeCategory === cat.name ? 'bg-artea-green text-white shadow' : 'bg-white text-artea-dark hover:bg-artea-light-green'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="relative group">
                    <button
                        aria-label="Scroll left"
                        onClick={() => scroll('left')}
                        className={`absolute top-1/2 -translate-y-1/2 -left-4 z-20 bg-white/90 p-2 rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hidden md:flex items-center justify-center
                        ${canScrollLeft ? 'opacity-100 group-hover:opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <ChevronLeftIcon />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 sm:gap-8 pb-4 custom-scrollbar scroll-smooth"
                    >
                        {MENU_DATA.map((category) => (
                            <div 
                                key={category.name}
                                // FIX: A ref callback must not return a value. Wrapped the assignment in braces to ensure a void return.
                                ref={el => { itemRefs.current[category.name] = el; }}
                                className="flex-shrink-0 w-11/12 sm:w-80 md:w-96"
                                id={`category-${category.name.replace(/\s+/g, '-')}`}
                            >
                                <CategoryCard category={category} />
                            </div>
                        ))}
                    </div>

                    <button
                        aria-label="Scroll right"
                        onClick={() => scroll('right')}
                        className={`absolute top-1/2 -translate-y-1/2 -right-4 z-20 bg-white/90 p-2 rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hidden md:flex items-center justify-center
                        ${canScrollRight ? 'opacity-100 group-hover:opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;