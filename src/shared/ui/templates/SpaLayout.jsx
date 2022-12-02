import React from "react";
import { BaseLayout } from "@/shared/ui/templates";

export const SpaLayout = ({ children }) => {
  return (
    <BaseLayout>
      <div className="spa-layout">
        <div className="spa-container">
          <div className="spa-content">
            {/*<ul>
                            <li>
                                <Link to={routes.home} activeClassName='text-red'>
                                    to Home
                                </Link>
                            </li>
                            <li>
                                <Link to={routes.login} activeClassName='text-red'>
                                    to Login
                                </Link>
                            </li>
                            <li>
                                <Link to={routes.manage.groups} activeClassName='text-red'>
                                    to manage groups
                                </Link>
                            </li>
                            <li>
                                <Link to={routes.manage.dashboard} activeClassName='text-red'>
                                    to manage dashboard
                                </Link>
                            </li>
                        </ul>*/}
            {children}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
