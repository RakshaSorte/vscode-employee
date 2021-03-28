import { Component } from 'react';

export default class Logout extends Component{
    render(){
        window.location="/";
        return localStorage.clear();
    }
}
