import React from "react";
import { SpaLayout } from "./SpaLayout.jsx";

export const ProtectedLayout = ({ sidebar, header, children }) => {
  return (
    <SpaLayout>

      {sidebar}

      <div className='page-content-wrapper'>

        {header}

        <div className='page-content'>
          {children}
        </div>

      </div>

    </SpaLayout>
  );
};
