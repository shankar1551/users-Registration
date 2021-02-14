import React from 'react'
import { Form, FormField, TextBox, LinkButton, PasswordBox } from 'rc-easyui';

class App extends React.Component {
    constructor(props) {
      super(props);
     
        this.fnameRef = React.createRef();
        console.log(this.fnameRef,'is the refrence of fname');


    
      this.state = {
        user: {
          fname: null,
          lname:null,
          email: null,
          password_1:null,
          password_2:null
         
        },
        allUser:
            [...this.props.alluser],
        rules:
            {
                fname: ["required"],
                lname:["required"],
                email:['required','email'],
                password_1:['required','length[5,12]'],
                password_2:['required','length[5,12]'],
            }
        
      }

     
       

        
      

    }

 
    handleChange(name, value) {
      let user = Object.assign({}, this.state.user);
      user[name] = value;
      this.setState({ user: user })
        // console.log(name,value);
    }



   

    handleSubmit() 
    {


        
          
           
        //...validate the passwords---
            if(this.state.user.password_2!==this.state.user.password_1)
            {
                // console.log('password does not matches');
                window.alert('password do not match');
                return;
            }

          else
          {
            
            this.props.addUser(this.state.user);
           
            this.setState({
                ...this.state,
                user:{
                    fname: null,
                    lname:null,
                    email: null,
                    password_1:null,
                    password_2:null
                   
                }
                });
          }  

        
       
              

    }
    render() {
      const { user } = this.state;
      return (
        <div className='user-container'>
          <h2 style={{textAlign:'center'}}>Registration Form</h2>
          <Form
            rules={this.state.rules}
            style={{ maxWidth: 800 }}
            model={user}
            labelWidth={220}
            labelAlign="right"
            onChange={this.handleChange.bind(this)}
          >
            <FormField   name="fname" label=" First Name:">
              <TextBox value={this.state.user.fname} ref={this.fnameRef}  ></TextBox>
            </FormField>
            <FormField name="lname" label="Last Name:">
              <TextBox value={this.state.user.lname}></TextBox>
            </FormField>
            <FormField name='email' label='Email:'>
                <TextBox value={this.state.user.email}></TextBox>
            </FormField>
            <FormField name='password_1' label="Password">
                <PasswordBox value={this.state.user.password_1}></PasswordBox>
            </FormField>
            <FormField name="password_2" label='Confirm Password'>
                <PasswordBox value={this.state.user.password_2}></PasswordBox>
            </FormField>
            <FormField style={{ marginLeft: 120 }}>
              <LinkButton onClick={this.handleSubmit.bind(this)}>Submit</LinkButton>
            </FormField>
          </Form>
         
          {/* <p>{JSON.stringify(user)}</p> */}
        </div>
      );
    }
  }
   
  export default App;