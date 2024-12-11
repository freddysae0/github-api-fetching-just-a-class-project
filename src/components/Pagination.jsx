export default function Pagination({onPrevious, onNext}) {
    return (
        <div>
            <button onClick={onPrevious} type="button">Previous</button>
            <button onClick={onNext} type="button">Next</button>
        </div>
        
    )
}