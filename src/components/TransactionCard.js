import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Styles = makeStyles((theme) => ({
    root:{
        maxWidth:345
    }
}))

class TransactionCard extends Component {
    
    render(){
        const {amount, name, date,category,eGift} = this.props
        return(
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body2">
                        {name}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        {amount}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        {category}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        {date}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(Styles)(TransactionCard)
