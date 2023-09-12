import './home.css';
import {articles} from '../../lib/article/articles';
import ArticleBox from '../Article/ArticleBox';
import TechSelectIndex from '../Tech/TechSelectIndex';
import { useState } from 'react';
import { returnArticle } from '../../lib/function/returnArticle';

export default function Home() {
    const [selectCategoryes, setSelectCategoryes] = useState<string[]>([]);
    const articleIndex = articles.filter((item) => {
        if (returnArticle(selectCategoryes, item)) {
            return item;
        } else {
            return;
        };
    });

    const handleCategorySelect = (category: string) => {
        if (category === 'all') {
            setSelectCategoryes([]);
        } else {
            if (selectCategoryes.includes(category)) {
                setSelectCategoryes(
                    selectCategoryes.filter(item => item !== category)
                );
            } else {
                setSelectCategoryes([
                    ...selectCategoryes, category
                ]);
            };
        };
    };

    return (
        <div className='home-container'>
            <div className='home-main-container'>
                <div className='home-category-container'>
                    <p className='home-title'>Category</p>
                    <TechSelectIndex selectCategoryes={selectCategoryes} selectCategory={handleCategorySelect} />
                </div>
                <div className='home-articles-container'>
                    <p className='home-title'>Articles</p>
                    {articleIndex.map((item, key) => {
                        return (
                            <a href={`/posts/${item.id}`} className='fill-link' key={key}>
                                <ArticleBox title={item.title} icon={item.icon} categoryes={item.categoryes} date={item.date} />
                            </a>
                        )
                    })}
                </div>
            </div>
            <div className='home-right-category-container'>
                <p className='home-title'>Category</p>
                <div className='home-right-category-box'>
                    <TechSelectIndex selectCategoryes={selectCategoryes} selectCategory={handleCategorySelect} />
                </div>
            </div>
        </div>
    );
};
