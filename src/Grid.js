import React from 'react';
import { DataGrid, GridColumn } from 'rc-easyui';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  


  render() {

        let data=null;
        if(this.props.allUsers.length===0 )
        {
            data= <h1>There Are No Users</h1>;
        }
        else{
              data = this.props.allUsers.map((item,index)=>{
                return(
                
              <div >
                <div >
                    <DataGrid data={[item]} style={{height:90,width:'100%'}}>
                    <GridColumn field="fname" title="First Name:"></GridColumn>
                    <GridColumn field="fname" title="Last Name:"></GridColumn>
                    <GridColumn field="email" title="Email:"></GridColumn>
                  </DataGrid>
                  <button onClick={ ()=>{this.props.deleteUser(index)}} style={{ width:'100%' }}>Delete</button>
                
                </div>
                    <br/>
                    <br/>
            </div> 
                );
              
            });
        }

        

    return (
      <div className="grid-container">
        <h2>Users List</h2>
        {data}
      </div>
    );
  }
}
 
export default App;



// <DataGrid data={this.state.data} style={{height:250}}>
// <GridColumn field="itemid" title="Item ID"></GridColumn>
// <GridColumn field="name" title="Name"></GridColumn>
// <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
// <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
// <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
// <GridColumn field="status" title="Status" align="center"></GridColumn>
// </DataGrid>