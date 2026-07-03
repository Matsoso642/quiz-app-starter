interface ResultsHeadersProps {
    score: number;
    total: number;
    performanceLabel: string;    
}

export default function ResultsHeader ({ score, total, performanceLabel}: ResultsHeadersProps) {
    return(
        <div className="results-header text-center mb-4">
            <h1 className="fw-bold"> Quiz Complete!</h1>
            <p className="text-muted">
                {performanceLabel}- you scored {score} out of {total}
            </p>
        </div>
    );
}