import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  defaultBlog,
  getBlog,
  removeBlog,
} from './actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  UNSAFE_componentWillMount() {
    this.props.defaultBlog();
  }

  componentDidMount() {
    this.getData();
  }

  UNSAFE_componentWillReceiveProps(props) {
    if(props.blogProps.isSuccess) {
      if(props.blogProps.option == 'get') {
        props.defaultBlog();
      } else if(props.blogProps.option == 'remove') {
        this.defaultBlog();
        setTimeout(() => {
          this.getData();
        }, 1000);
      }
    }
  }

  getData = () => {
    let { blogProps } = this.props;
    if (!blogProps.isLoading) {
      this.props.getBlog();
    }
  }

  handleRemove = (id) => {
    this.props.removeBlog(id);
  }

  renderData = (data) => {
    let { history } = this.props;
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index+1}</td>
            <td>{item.title}</td>
            <td>
              <button onClick={() => history.push(`/edit/${item._id}`)} className="btn btn-sm btn-info pr-5">Detail</button>
              <button onClick={() => history.push(`/detail/${item._id}`)} className="btn btn-sm btn-warning pr-5">Edit</button>
              <button onClick={() => this.handleRemove(item._id)} className="btn btn-sm btn-danger">Remove</button>
            </td>
        </tr>
      )
    });
  }

  render() {
    let {blogProps, history} = this.props;
    return (
      <div className="container mt-5">
        <div className="row align-items-start">
          <div className="col">
            <button className="btn btn-md btn-primary mb-5" onClick={() => history.push('/create')}>+ Add Article</button>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th width="5%">No</th>
                  <th>Title</th>
                  <th width="15%">Action</th>
                </tr>
              </thead>
              <tbody>
                  {this.renderData(blogProps.data)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blogProps: state.blog
})

const mapDispatchToProps = (dispatch) => ({
  defaultBlog: () => dispatch(defaultBlog()),
  getBlog: () => dispatch(getBlog()),
  removeBlog: (id) => dispatch(removeBlog(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
