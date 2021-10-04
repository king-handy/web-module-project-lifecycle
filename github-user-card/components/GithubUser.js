import React from 'react';
import axios from 'axios';

export class GithubUser extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [];
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/<your name>').then(res => {
            this.setState({ user:  })
        })
    }
}
