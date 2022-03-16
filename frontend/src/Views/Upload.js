import { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
// import { Navigate } from "react-router-dom";
// import authContext from "../Context/Auth/authContext";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  // const { token } = useContext(authContext);

  const uploadFile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      await axios.post(`/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success");
    } catch (error) {
      console.log(error);
    }
  };

  // const uploadFile = () => {
  //   const data = new FormData();
  //   data.append("file", selectedFile);
  //   axios
  //     .post("/", data, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       // then print response status
  //       console.log(res.statusText);
  //     });
  // };

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  return (
    <div>
      <Typography component="h1" variant="h5" align="center">
        Upload your files
      </Typography>
      <div>
        <input type="file" name="file" id="file" onChange={changeHandler} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <button onClick={uploadFile}>Submit</button>
      </div>
    </div>
  );
};

export default Upload;
