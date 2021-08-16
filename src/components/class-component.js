import React from 'react'
export class ClassExample extends React.Component{

    constructor(props){
        super(props);
        this.state={
           // name:props.stuff.name,
           name:props.name,
            //message:props.stuff.message
            message:props.message
        }
    }

    // state={
    //    name:this.props.stuff.name,
    //     message:this.props.stuff.message
    // }

    render(){

        const doClick=()=> {
            this.setState({
                name: "Jacob",
                message: "This is a new message!!!"

            });
        }

        return(
            <>
                <div className="ClassExample">
                    <h1>This is a class Companent</h1>
                    <p1>Hello, {this.state.name}.{this.state.message}.</p1>
                </div>

                <button style={{width: '100px'}} onClick={doClick}>Click me!</button>

            </>
        );
    }

}