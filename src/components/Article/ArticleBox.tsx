import {formattedDate} from '../../lib/function/formattedDate';
import TechIndex from '../Tech/TechIndex';
import './article.css';

export default function ArticleBox({
    title, icon, date, categoryes,
}: {
    title: string, icon: string, date: string, categoryes: string[],
}) {

    return (
        <div className='article-box-container'>
            <p className='icon'>{icon}</p>
            <div className='right-container'>
                <div className='title-box'>
                    <p className='title'>{title}</p>
                    <p className='date-text'>{formattedDate(date)}</p>
                </div>
                <TechIndex categoryes={categoryes} />
            </div>
        </div>
    );
}
