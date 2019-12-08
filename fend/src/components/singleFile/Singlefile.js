import React, { Component } from "react";
import Axios from "axios";
import './Singlefile.css'

class SingleFile extends Component {

  state = {
    singleFileData: [],
    asc: true,
    fileUpload:false
  };
  componentDidMount() {
    Axios.get(
      `http://localhost:8000/api/getFileByName/${this.props.location.state.file}`
    )
      .then(data => {
        this.setState({ singleFileData: data.data });
    
      })
      .catch(err => console.log(err));
  }
   sortBy=(key) =>{
       var key = key.column
       
       this.setState({
          singleFileData : this.state.asc ? this.state.singleFileData.sort( (a, b) =>{
                if (a[key] > b[key]) {
                    return -1;
                }
                if (b[key] > a[key]) {
                    return 1;
                }
                return 0;
                
            })  :  this.state.singleFileData.sort( (a, b) =>{
                if (a[key] < b[key]) {
                    return -1;
                }
                if (b[key] > a[key]) {
                    return 1;
                }
                return 0;
                
            })

       })
       this.setState({
           asc:!this.state.asc
       })
       
    }
   
     uploadFile = async e => {
      const files = e.target.files
      
      
      const form = new FormData()
      
        form.append('files', files[0], files[0].name)
      
      try {
        let request = await fetch(`http://localhost:8000/api/updateFile`, {
          method: 'post',
          body: form,
        })
        const response = await request.json()
        console.log('Response', response)
      } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
      }
    }
    
    changeUploadFile = () =>{
      this.setState({fileUpload: !this.state.uploadFile})
    } 
  render() {
    var headerData = this.state.singleFileData[0];
    headerData = this.state.singleFileData[0]
      ? Object.keys(this.state.singleFileData[0])
      : undefined;
    
    // const bodyData = this.state.singleFileData
    // console.log(bodyData)
    if (headerData) {
      headerData = headerData.map(column => {
        return <th>
        <button
        
        onClick ={() => this.sortBy({column})}>
        {column}
        </button>
        </th>;
      });
    }
    var bodyData = this.state.singleFileData;
    
    bodyData = bodyData.map(row => {
        row.id = Number(row.id)
        console.log(typeof row.id)
      return (
        <tr>
          {" "}
          {Object.values(row).map(column => {
              
            return <td >{column}</td>;
          })}
        </tr>
      );
    });
  
    return (
      <>
      { 
        this.state.fileUpload?
      <div className="card">
      <h1>File upload</h1>
      <input type="file" accept=".csv" onChange={e => this.uploadFile(e)} />
    </div>
    :
      <div className="newBox">
      <div className = "anotherFile"> <button onClick = {this.changeUploadFile}>Choose Another File</button></div>
        <table className="table table-dark">
          <thead>
            <tr>{headerData}</tr>
          </thead>
          <tbody>{bodyData}</tbody>
        </table>
        <a href = {`http://localhost:8000/api/download/${this.props.location.state.file}`}><button> Download File</button></a>
        
         
        </div>
      }
        </>
        
        
    );
  }
}

export default SingleFile;
