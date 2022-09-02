import "./AnimatedBackground.scss";

const AnimatedBackground = ({ children }) => {
    return (
        <div className="ani-back">
            <div className="background-canvas">
                {Array(20).fill(1).map((el, i) => <span key={i}/>)}
            </div>
            {children}
        </div>
    )
}

export default AnimatedBackground;