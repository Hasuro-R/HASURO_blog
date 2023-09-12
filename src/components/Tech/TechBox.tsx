import { returnTechData } from '../../lib/function/returnTechData';
import './tech.css';

export default function TechBox({category}: {category: string}) {
    const tech = returnTechData(category);

    return (
        <div className='category-box'>
        {tech.icon !== '' && (
            <img src={tech.icon} alt={tech.name} className='category-icon' />
        )}
            <span>{tech.name}</span>
        </div>
    );
};
