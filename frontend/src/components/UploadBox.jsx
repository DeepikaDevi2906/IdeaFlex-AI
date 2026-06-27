import {
    HiCloudArrowUp,
    HiDocumentPlus
} from "react-icons/hi2";
import React from "react";
function UploadBox({ handleChange, handleUpload }) {

    return (

        <div className="upload-box-container">

            <div className="upload-dropzone">

                <div className="upload-file-icon">
                    <HiDocumentPlus />
                </div>

                <h2>
                    Upload Startup Files
                </h2>

                <p>
                    Drag & drop files or browse from your device
                </p>

                <input
                    type="file"
                    onChange={handleChange}
                    className="custom-file-input"
                />

            </div>

            <button
                className="upload-main-btn"
                onClick={handleUpload}
            >

                <HiCloudArrowUp />

                Upload File

            </button>

        </div>
    );
}

export default UploadBox;