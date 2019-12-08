import React, { Component } from "react";
import axios from "axios";
import FilesList from "./FilesList";

export default class Uploads extends Component {
  constructor() {
    super();
    this.state = {
      files: null
    };
  }
  handleUploadFile = e => {
    let files = e.target.files[0];
    //console.log(file)
    this.setState({ files: files });
  };
  handleUpload = e => {
    e.preventDefault();
    let files = this.state;
    console.log(files);
    let formdata = new FormData();
    //for(var x = 0; x<files.length; x++) {
    formdata.append("file", files);
    //}

    for (var key of formdata.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    // const config = {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Accept: "application/json"
    //   }
    // };
//     axios
//       .post(
//         "http://localhost:8081/api/uploadMultipleCsvFiles",
//         formdata,
//         {}
//         // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//       )
//       .then(res => console.log(res))
//       .catch(err => console.log(err));

             
fetch('http://localhost:8081/api/uploadMultipleCsvFiles', {
    method: 'POST',
    body: files.files
  })
  .then(
    response => response.text() // if the response is a JSON object
  ).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );
   };
  render() {
    return (
        <div>
      <div>
        <label>Select Files</label>
        <input
          type="file"
          name="file"
          
          onChange={e => this.handleUploadFile(e)}
        />
        <button type="button" onClick={e => this.handleUpload(e)}>
          {" "}
          Upload
        </button>
      </div>
         <FilesList/>
      </div>
    );
  }
}
