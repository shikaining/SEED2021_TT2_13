import React, { Component } from 'react'
import TransactionCard from './TransactionCard'
import axios from 'axios'
import _ from 'lodash'
import { Grid } from '@material-ui/core'

class TransactionPage extends Component {
    // This page will inherit the card - pass in the props into the transaction card
    constructor(props){
        super(props)
        this.state = {
            ownID: 13, //hardcode first; will change later
            transactionDetails: [] //should be the finalised product with finalised json of each product
            /* within each json for each transactions in the transaction details
            name: string, // need to track the first name from the id in view account details api 
            amount: string, // add a plus or minus
            category: string, //get from the 
            date: string, // need to deserialise the date type for each data 
            eGift: boolean, // boolean format for the 
            */
        }
    }
    //TODO: function to get the transaction details of the user from the backend
    // Currently,ven as a list of jsons when you call the post api 
    async componentDidMount() {
        const {ownID,transactionDetails} = this.state
        await axios.get('/getTransactionHistory',{
            params:{custID: ownID}
        }).then( (res,ownID) =>
            this.setState(transactionDetails=this.dataParser(res.data,ownID))
        ).catch( (e) => {
            console.log(e)
        })
    }

    nameSearcher = ( id ) => {
        //get the first name from the database for all ids
        let userDatabase = []
        axios.get('/getFirstNames').then((res)=>{
            userDatabase = [...res.data]
        }).catch((e)=>{
            console.log(e)
        })
        let nameCollection = _.find(userDatabase,(x)=>{return x.custID === id})
        let transacName = nameCollection.firstName
        return transacName
    }

    dataParser = (datajson,ownID) => {
    // combine functions for the functional renderers
        let parsedData = []
        for (let transaction in datajson){

            let new_transaction = {}
            new_transaction.date = transaction.date
            new_transaction.category = transaction.expensesCat
            new_transaction.eGift = transaction.eGift
            // If custid == ownID, it will be a negative transaction
            // If payeeid == ownID, it will be a postive transaction
            if (transaction.custID === ownID) {
                new_transaction.amount = '-'.concat(String(transaction.amount))
                new_transaction.name = 'Paid To '.concat(this.nameSearcher(transaction.payeeID))
            } else if (transaction.payeeID === ownID) {
                new_transaction.amount = '+'.concat(String(transaction.amount))
                new_transaction.name = 'Received From '.concat(this.nameSearcher(transaction.custID))
            }
            parsedData.push(new_transaction)
        }
        return parsedData
    }



    render() {
        // for each transaction history, parse in the props into the transaction card so that the 
        const { transactionDetails } = this.state
        let transactionCards = transactionDetails.map((amount, name, date, category, eGift) => {
            return(
                <TransactionCard amount={amount} name={name} date={date} category={category} eGift={eGift}/>
            )
        })
        
        return(
            <Grid container> 
                <Grid item xs={12} sm={6} md={4}>
                    {transactionCards}
                </Grid>
            </Grid>
        )
    }
}

export default TransactionPage

