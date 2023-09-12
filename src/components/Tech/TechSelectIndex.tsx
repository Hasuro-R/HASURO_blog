import './tech.css';
import { categoryes } from "../../lib/category/categoryes";

export default function TechSelectIndex({selectCategoryes}: {selectCategoryes: string[]}) {
    const categoryIndex = categoryes.filter((item) => {
        if (selectCategoryes.length === 0) {
            return item;
        };
    });

    return (
        <div className='tech-index-container'>
        {categoryIndex.length !== 0 && (
            categoryIndex.map((item, key) => {
                return (
                    <div className='category-box' key={key}>
                        <img src={item.icon} alt={item.name} className='category-icon' />
                        <span>{item.name}</span>
                    </div>
                )
            })
        )}
        </div>
    );
};
