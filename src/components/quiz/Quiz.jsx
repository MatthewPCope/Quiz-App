import './Quiz.css'


const Quiz = () => {
    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>What's it gonna take to equip a fleet of F-16s with Thermite Plasma in the next 36 hours?</h2>
            <ul>
                <li>An act of God</li>
                <li>Excuse me?</li>
                <li>Ok, we can try</li>
                <li>All of the above</li>
            </ul>
            <button>Next</button>
            <div className="index">1 of 5 questions</div>
        </div>
    )
}

export default Quiz