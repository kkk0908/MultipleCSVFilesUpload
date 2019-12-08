import React from 'react';  
import './Popup.css';  
import axios from 'axios'
import {Link} from 'react-router-dom'
class Popup extends React.Component {  
  state = {
    files:[],
    showList:false
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/getAllFiles')
        .then(res=>this.setState({files:res.data}))
        .then(()=>console.log(this.state.files))
        .catch(err=>console.log(err))
  }
  showList = () =>{
    this.setState({showList:!this.state.showList})
  }
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1 className="title">Files Uploaded Successfully</h1>  
<button onClick={this.props.closePopup}>close me</button>  
<button onClick={this.showList}>Show List</button>  
{
  this.state.showList ? <ul>
{this.state.files?(this.state.files.map((file)=>{
  
  return <Link to={{pathname:`/singleFile/`,state:{file:file}}}>{file}<br/></Link>
  //return <li>{file}</li>
})):""}
</ul>:null
}
</div>  

</div>  
);  
}  
}  

export default Popup;