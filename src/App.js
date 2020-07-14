import React, { Component } from 'react';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';

class App extends Component {
  state ={
    courses :[
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Jquery' },
    ],
    current:''

  }

  //Update Course
  updateCourse = (e) => {
    this.setState({
      current:e.target.value
    })
  }

  //Add Course
  addCourse = (e) => {
  e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current});
    this.setState({
      courses:courses,
      current:''

    })
  }

  //editcourse
  editCourse = (index,value) =>{
    let courses = this.state.courses;
    let course =courses[index];
    course['name']=value;
    this.setState({
      courses
    })
  }


  //Delete course
  deleteCourse = (index)=> {
    let courses = this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }

  render(){

    const {courses} = this.state;
    const courseList = courses.map((course,index)=>{
      return <CourseList data={course} key={index} index={index} update={this.handlechange} delete={this.deleteCourse} edit={this.editCourse}/>
    })

    return (
      <div className="App">
        <h2>Add Courses</h2>
        <CourseForm current={this.state.current} update={this.updateCourse} add={this.addCourse}/>
        <ul>{courseList}</ul>  
      </div>
    );
  }
 
}

export default App;
