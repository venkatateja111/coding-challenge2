import React from 'react'

function Table1(props) {
    console.log(props)
    return (
        <div>
            {
                props.apiResponse1.map((item) => (
                    <div style={{margin: "20px"}}>

                                    <h3>Id: {item.Id},</h3>
                                    <h3>Firstname: {item.Firstname},</h3>
                                    <h3>Surname : {item.Surname},</h3>
                                    <h3>Year : {item.Year},</h3>
                                    <h3>Motivation: {item.Motivation},</h3>
                                    <h3>Category: {item.Category},</h3>
                                    <hr style={{backgroundColor: "red", borderTop: "1px solid red"}} />



                    </div>
                ))
            }
                
                    
                         
                        
                

        </div>
    )
}

export default Table1
