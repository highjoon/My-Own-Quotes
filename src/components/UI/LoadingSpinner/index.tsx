import React, { Fragment } from "react";
import { Spinner } from "@components/UI/LoadingSpinner/styles";

const LoadingSpinner: React.FC = () => {
  return (
    <Fragment>
      <Spinner />
    </Fragment>
  );
};

export default LoadingSpinner;
