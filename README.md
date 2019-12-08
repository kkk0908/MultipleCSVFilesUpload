# MultipleCSVFilesUpload

The sample task has the following requirements:

An input is required to be developed which will accept only ‘.csv’ file types.
On selecting a file, it should be added to the file upload section.
Users can add multiple .csv files.
Once added, you need to load the files to a Node.js server as soon as the user clicks the  submit button.
Once uploaded, show a popup that the file was uploaded with a button which will open a modal which will show the list of files. User can select a file and view its data which will be fetched from the server.
Once the fetching is completed, you need to store the data in redux and display the parsed file data in the following way:

A Tabular Display where all the data of the file is shown in the form of a table.
 
The table can optionally have the following functionality:
Sorting for every column ( ascending/descending ).

User should be able to upload files again overwriting the existing data by clicking on the button labelled ‘Choose another file’.

Add a download button to download the file from the server.
