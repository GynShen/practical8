import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            // Zone1: This to define variables
            newPostModal: false,
            newPostData: { title: "", content: "", user_id: "" },
        };
    }
    // Zone2: This to define the methods
    toggleNewPostModal() {
        this.setState({ newPostModal: !this.state.newPostModal });
    }

    addPost() {
        axios
            .post("http://127.0.0.1:8000/api/post", this.state.newPostData)
            .then((response) => {
                let { posts } = this.state;
                this.setState({
                    newPostModal: false, //Hide modal after create post
                    newPostData: { title: "", content: "", user_id: "" }, //Clear modal input
                });
            });
    }

    render() {
        // Zone3: This to define visual element
        return (
            <div>
                <Button
                    color="primary"
                    outline
                    onClick={this.toggleNewPostModal.bind(this)}
                >
                    Add Post
                </Button>
                <Modal
                    isOpen={this.state.newPostModal}
                    toggle={this.toggleNewPostModal.bind(this)}
                >
                    <ModalHeader toggle={this.toggleNewPostModal.bind(this)}>
                        Modal Create a New Post
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                id="title"
                                value={this.state.newPostData.title}
                                onChange={(e) => {
                                    let { newPostData } = this.state; //get the state
                                    newPostData.title = e.target.value; //update the state
                                    this.setState({ newPostData }); //save the state
                                }}
                            ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input
                                id="content"
                                value={this.state.newPostData.content}
                                onChange={(e) => {
                                    let { newPostData } = this.state;
                                    newPostData.content = e.target.value;
                                    this.setState({ newPostData });
                                }}
                            ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="user_id">User ID</Label>
                            <Input
                                id="user_id"
                                value={this.state.newPostData.user_id}
                                onChange={(e) => {
                                    let { newPostData } = this.state;
                                    newPostData.user_id = e.target.value;
                                    this.setState({ newPostData });
                                }}
                            ></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addPost.bind(this)}>Save the Post</Button>
                        <Button color="secondary">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

if (document.getElementById("basic")) {
    ReactDOM.render(<Example />, document.getElementById("basic"));
}
