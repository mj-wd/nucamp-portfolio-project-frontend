import { Card } from "react-bootstrap"

export function GenerateCard({mood}) {
    return(
        <div>
            <Card>
                <Card.Title>{mood}</Card.Title>
            </Card>
        </div>
    )
}