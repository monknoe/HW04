import React from 'react';
import $ from 'jquery';



class UserGithub extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    username: '',
    githubtUrl: '',
    avatarUrl: '',
    created_at:'',
    name:'',
    bio:'',
    }
    }
    componentDidMount() {
    $.get(this.props.source, (result) => {
    console.log(result);
    const data = result;
    if (data) {
    this.setState({
    username: data.name,
    githubtUrl: data.html_url,
    avatarUrl: data.avatar_url,
    created_at:data.created_at,
    name:data.name,
    bio:data.bio,
    });
    }
    });
    }
    render() {
    return (
    <div>
    <h3>{this.state.username}</h3>
    <img src={this.state.avatarUrl} />
    <a href={this.state.githubtUrl}>Github Link</a>.
    <p>start coding from:{this.state.created_at}</p>
    <p>my name:{this.state.name}</p>
    <h2>{this.state.bio}</h2>
    </div>
    );
    }
    }
    export default UserGithub