import TechBox from './TechBox';
import './tech.css';

export default function TechIndex({categoryes}: {categoryes: string[]}) {
    return (
        <div className='tech-index-container'>
        {categoryes.map((item, key) => {
            return (
                <TechBox category={item} key={key} />
            )
        })}
        </div>
    );
};
