import React, { Component, Fragment } from 'react';

class CourseList extends Component {

    state={
        isEdit:false
    }

    // render course item
    renderCourse=()=>{
        return(
            <li>
                <span>{this.props.data.name}</span>
                <button onClick={()=>{this.toggleState()}}>Edite Course</button>
                <button onClick={()=>{this.props.delete(this.props.index)}}>Delete Course</button>
            </li>
        )
    }

    // toggle state
    toggleState = () =>{
       let {isEdit}=this.state;
       this.setState({
           isEdit:!isEdit
       })
    }

    // update item
    updateItem = (e) =>{
        e.preventDefault();
        this.props.edit(this.props.index , this.input.value);
        this.toggleState();
    }


    // render update form
    renderUpdate=()=>{
        return(
            <form onSubmit={this.updateItem}>
                <input type="text" ref={(v)=>{ this.input=v}} defaultValue={this.props.data.name }/>
                <button type="submit"  onClick={this.updateItem}>Edite Course</button>
            </form>
        )
    }

    render() {
        let { isEdit } = this.state;
        return (
            <Fragment>

               {isEdit ? this.renderUpdate() : this.renderCourse()}
               
            </Fragment>
        );
    }

}

export default CourseList;
