import * as React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Container } from '@mui/material';

export class GithubUser extends React.Component {
    constructor() {
        super();
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/king-handy').then(res => {
            this.setState({ res });
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Container>
                <ButtonGroup>
                    <Button>
                        Hello
                    </Button>
                </ButtonGroup>
            </Container>
        );
    }
}
