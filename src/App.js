import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super();
		const ref = this;
		ref.state = {
			data: [],
		}
    }

    componentWillMount() {
        axios.get('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json') 
            .then(res => {
                this.setState({ 
                    data: res.data
                });
            });
    }
    render() {
    	const ref = this;
        let x = []
        ref.state.data.map(function(elem) {
            x.push(elem.colors)
        })
        console.log(x[1])
        return (
            <div className="App">
                <div className="container_fluid">
                	{
                        ref.state.data.map(function(el, i) {
                            return(
                                <div className="flex_item" id={i}>
                                    <div className="cards">
                                        <div className="image" style={{background: `linear-gradients ${x[i]}`}}>
                                            <div className="copy_circle">
                                                <button>save</button>
                                            </div>
                                        </div>
                                        <div className="texts">
                                            <div className="name">{el.name}</div>
                                            <div className="code">
                                                {
                                                    el.colors.map(function(elem, i) {
                                                        return <span>{elem} </span>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
