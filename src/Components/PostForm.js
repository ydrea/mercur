import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //1. state are inputs by name...
            title: '',
            text: ''
        };
        // 5. onChange is bound to this
        this.onChange =  this.onChange.bind(this);
        // 7. ss is OnSubmit
        this.onSubmit =  this.onSubmit.bind(this);
    }
    //4. onChange function
    onChange(event) {
    this.setState( { [event.target.name]: event.target.value } );
}

//8. onSubmit function
onSubmit(event) {
event.preventDefault ();

//9. make a post object
const post = {
    title: this.state.title,
    text: this.state.text
};

fetch ('https://jsonplaceholder.typicode.com/posts', 
{
method: 'POST',
headers: {
    'content-type': 'application/json'
},
text: JSON.stringify(post)
})
.then(rez => rez.json())
.then(data => console.log(data));
}

    render() {
        return (
            <div>
                <h1>Post Form</h1>
                {/* 6. onSubmit */}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> Title </label>
                        <input type='text' name='title' 
                        //2.so the values are available.
                        value= {this.state.title}
                        //3. enable the change of state
                        onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label> Text </label>
                        <textarea name='text' 
                        
                        //2. so the values are available.
                        value= {this.state.text}
                        
                        //3. enable the change of state
                        onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <button type='submit'> Submit </button>
                </form>
            </div>
        );
    }
}

export default PostForm;
