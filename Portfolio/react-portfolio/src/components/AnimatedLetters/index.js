import './index.scss'

const AnimatedLetters = ({letterClass, str, index}) => {
    const map = Array.prototype.map;


    return (
        <span>
            {
                map.call(str, (letter, i) => (
                    <span key={letter+i} className={`${letterClass} _${i+index}`}>{letter}</span>
                ))
            }
        </span>
    );
}

export default AnimatedLetters;