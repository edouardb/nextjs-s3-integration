import AwsS3 from "@uppy/aws-s3";
import DashboardModal from "@uppy/react/lib/DashboardModal";
import PropTypes from "prop-types";
import React, { useState } from "react";
import uppy from "@uppy/core";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

function UppyModal({ bucket, open, onClose, path, mutate, s3Instance }) {
  const [uppyInstance] = useState(
    uppy({
      allowMultipleUploads: true,
      restrictions: {
        maxNumberOfFiles: 50,
      },
    }).use(AwsS3, {
      getUploadParameters(file) {
        return fetch("/api/upload", {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            filename: file.name,
            contentType: file.type,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return {
              method: data.method,
              url: data.url,
              fields: data.fields,
              headers: data.headers,
            };
          });
      },
    })
  );

  return (
    <DashboardModal
      hidePauseResumeButton
      closeModalOnClickOutside
      proudlyDisplayPoweredByUppy={false}
      uppy={uppyInstance}
      open={open}
      onRequestClose={onClose}
    />
  );
}

UppyModal.defaultProps = {
  open: false,
  onClose: null,
};

UppyModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default UppyModal;
