import React, { Component } from "react";
import Axios from "axios";

class SingleFile extends Component {

  state = {
    singleFileData: [],
    asc: true
  };
  componentDidMount() {
    Axios.get(
      `http://localhost:8000/api/getFileByName/${this.props.location.state.file}`
    )
      .then(data => {
        this.setState({ singleFileData: data.data });
        console.log(data)
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
      <div className="newBox">
        
        <table>
          <thead>
            <tr>{headerData}</tr>
          </thead>
          <tbody>{bodyData}</tbody>
        </table>
        <a href = {`http://localhost:8000/api/download/${this.props.location.state.file}`}><button> Download File</button></a>
      </div>
    );
  }
}

export default SingleFile;
