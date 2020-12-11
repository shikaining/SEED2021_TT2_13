import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'



function TransactionCard() {
    const [expanded,setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return(
        <Card>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}

export default TransactionCard
