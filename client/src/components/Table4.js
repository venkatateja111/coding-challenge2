import React from 'react'

function Table4(props) { 

    return (

        <div>


      {
         (props.apiResponse4.length > 0) ? (
             

          <table class="table table-bordered table-hover">
          <thead>
            <tr>
             
              <th scope="col"><h3>Firstname</h3></th>
              <th scope="col"><h3>Surname</h3></th>
              <th scope="col"><h3>Year</h3></th>
              <th scope="col"><h3>Category</h3></th>
            </tr>
          </thead>
          <tbody>
        {
          props.apiResponse4.map((item) => (
            <tr>
              <td><h4>{item.Firstname}</h4></td>
              <td><h4>{item.Surname}</h4></td>
              <td><h4>{item.Year}</h4></td>
              <td><h4>{item.Category}</h4></td>
            </tr>
          ))

         }
            </tbody>
   </table>
         )
          : null
      } 
 
        </div>
    )
}

export default Table4





