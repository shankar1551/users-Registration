
import './App.css';
import React,{useState,useEffect} from 'react';
import Users from './Users';
import Grid from './Grid';
import { Layout, LayoutPanel } from 'rc-easyui';





const App = ()=>
{


  

 if(JSON.parse(localStorage.getItem('userRegistration'))===null )
 {
   let temparray=[];
  localStorage.setItem('userRegistration',JSON.stringify(temparray));
 }
  
  const[alluser,setAlluser] = useState(JSON.parse(localStorage.getItem('userRegistration')));

  




  //delete user on button click function-
  const deleteUser = (index)=>
  {
        
        //receiving the existing users
        let rdata = JSON.parse(localStorage.getItem('userRegistration'));
      //deleting the selected user
        const deletedUser = rdata.filter((item,ind)=>{
          if(ind!==index)
          {
            console.log(index);
            return item;
          }
        });
      
        //storing the users after delition
        localStorage.setItem('userRegistration',JSON.stringify(deletedUser));
        setAlluser(deletedUser);


        
  }



  //adding the new user
  const addUser = (data)=>
  {
      // console.log(data,'to be added');
      //fetching the existing users
      let rdata = JSON.parse(localStorage.getItem('userRegistration'));
      console.log(rdata);
      //adding new user
      rdata.push(data);
      localStorage.setItem('userRegistration',JSON.stringify(rdata));
      // console.log(rdata,'after adding user');
     //updating state with new user list
      setAlluser(rdata);

      // console.log(alluser,'is the all user');


  }



  return (
  
  <>
    
    <Layout style={{ width: '100%', height: 1024 }}>
         
         <LayoutPanel region="west" style={{ width: '50%' }}>
            <Users  alluser= {alluser} addUser={addUser}/>
         </LayoutPanel>
         <LayoutPanel region="east" style={{ width: '50%' }}>
            <Grid allUsers={alluser} deleteUser={deleteUser}/>
         </LayoutPanel>
        
       </Layout>  
        
         
       
  
  </>);

}


export default App;

