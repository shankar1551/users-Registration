import React, { useEffect } from 'react';


function AnotherRef(props)
{
    
    

    // var ref = React.createRef();
    
       useEffect( ()=>
       {
           console.log(props.refF);
           props.refF.current.focus();
       } );
       

    return(
        <>

            <input ref={props.refF}></input>
            
        </>
    );

       


}

class Refrence extends React.Component {
    constructor(props) {
        super(props);

        this.inputref = React.createRef();

    }

    componentDidMount()
    {
        console.log(this.inputref);
        this.inputref.current.focus();
        this.inputref.current.value="shankar";
    }

    render() {
        return (
            <div>
                   
                    <AnotherRef refF={this.inputref}/>
            </div>
        );
    }
}

Refrence.propTypes = {

};

export default Refrence;