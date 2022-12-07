import React, { Component } from 'react';
import './Chat.css';
import { data } from "../../data.js";
import {
    collection,
    getDocs,
} from 'firebase/firestore';
import { app, database } from '../../index';

export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            interactions: [],
            idx: 0
        }

    }
    componentDidMount() {
        getDocs(collection(database, "interactions"))
            .then((snapshot) => {
                console.log(snapshot);
                const interactions = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    console.log(data);
                    data['id'] = doc.id;
                    return data;
                })
                this.setState({
                    interactions: interactions,
                    loading: false
                });
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClick = (e) => { // console.log(this.state.message);
        let m = this.state.message;
        {
            data[this.state.idx].Interactions.push({ msg: m, by: "Amith", id: 91, createdAt: new Date().toLocaleString('en-IN') })
        }
        this.setState({ message: "" })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {

        return (
            <div>
                <section className="chatbox">
                    <section className="chat-window">
                        {this.state.interactions.map((i, ind) => {
                            return <article className="msg-container msg-remote">
                                <div className="msg-box"
                                    style={
                                        { background: " rgba(132, 209, 23, 0.1)" }
                                    }>
                                    <img className="user-img" src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro" alt="avatar" />
                                    <div className="flr">

                                        <div className="messages">
                                            <p className="msg">
                                                {/* Looks Good! */}
                                                {i.chats[ind].message}
                                            </p>
                                        </div>
                                        <span className="timestamp">
                                            <span className="username">By: {
                                                i.chats[ind].by}</span>
                                            <br />
                                            {/* new Date().toLocaleString('en-IN') */}

                                            {
                                                new Date(i.chats[ind].createdAt.nanoseconds).toLocaleString()


                                            }

                                        </span>
                                    </div>
                                </div>

                            </article>
                        })}

                        {
                            data[this.state.idx].Interactions.map((chats, index) => {
                                return (

                                    <article className="msg-container msg-self"
                                        key={index}>

                                        <div className="msg-box">
                                            <img className="user-img" src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro" alt="avatar" />
                                            <div className="flr">

                                                <div className="messages">
                                                    <p className="msg">
                                                        {
                                                            chats.msg
                                                        } </p>
                                                </div>
                                                <span className="timestamp">
                                                    <span className="username">
                                                        {
                                                            chats.by
                                                        }</span>
                                                    <br />
                                                    <span className="posttime">
                                                        {
                                                            chats.createdAt
                                                        }</span>
                                                </span>
                                            </div>
                                        </div>

                                    </article>


                                )
                            })
                        }
                    </section>


                    <form className="chat-input"
                        onSubmit={
                            this.handleSubmit
                        }>
                        <input type="text" autoComplete="on" placeholder="Type a message" name="message"
                            value={
                                this.state.message
                            }
                            onChange={
                                this.handleChange
                            } />
                        <button onClick={
                            this.handleClick
                        }>
                            <svg style={
                                {
                                    width: "24px",
                                    height: "24px"
                                }
                            }
                                viewBox="0 0 24 24"><path fill="rgba(0,0,0,.38)" d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" /></svg>
                        </button>
                    </form>
                </section>
            </div>
        )

    }
}