import './tech.css';
import { categoryes } from "../../lib/category/categoryes";
import { returnCategorySelected } from '../../lib/function/returnCategorySelected';

export default function TechSelectIndex({
    selectCategoryes, selectCategory,
}: {
    selectCategoryes: string[], selectCategory: any,
}) {
    return (
        <div className='tech-index-container'>
        {categoryes.map((item, key) => {
            return (
                <div
                    className='category-select-box'
                    style={returnCategorySelected(selectCategoryes, item.name) ? {boxShadow: 'var(--box-shadow)', border: 'none'} : {}}
                    onClick={() => selectCategory(item.name)}
                    key={key}
                >
                {item.icon !== '' && (
                    <img src={item.icon} alt={item.name} className='category-icon' />
                )}
                    <span>{item.name}</span>
                </div>
            )
        })}
        </div>
    );
};
