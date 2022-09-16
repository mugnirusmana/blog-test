import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    createBlog,
    defaultCreateBlog,
    resetCreateBlog
} from './actions';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            image: null,
            description: null,
        }
    }

    UNSAFE_componentWillMount() {
        this.props.defaultCreateBlog();
    }
    
    UNSAFE_componentWillReceiveProps(props) {
        if(props.editProps.isSuccess) {
          props.defaultCreateBlog();
          props.history.replace('/');
        }
      }

    handleSave = () => {
        let {title, image, description} = this.state;
        let params = {
            title,
            image,
            description
        }
        this.props.createBlog(params);
    }

    render() {
        let {title, image, description} = this.state;
        let { history } = this.props;

        return (
            <div className="container mt-5">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="form-group mb-3">
                            <label>Title</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => this.setState({...this.state, title: e.target.value})} />
                        </div>

                        <div className="form-group mb-3">
                            <label>Image</label>
                            <input type="file" accept=".png,.jpeg,.jpg" className="form-control" value={image} onChange={(e) => console.log(e.target.value)} />
                        </div>

                        <div className="form-group mb-3">
                            <label>Description</label>
                            <textarea className="form-control"  onChange={(e) => this.setState({...this.state, description: e.target.value})} >{description}</textarea>
                        </div>

                        <div className="form-group">
                            <button onClick={history.replace('/')} className="btn btn-md btn-default" >Back</button>
                            <button disabled={!title || !description} className="btn btn-md btn-primary" onClick={() => this.handleSave()} >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    createProps: state.create
})
  
const mapDispatchToProps = (dispatch) => ({
    defaultCreateBlog: () => dispatch(defaultCreateBlog()),
    createBlog: (params) => dispatch(createBlog(params)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Create);