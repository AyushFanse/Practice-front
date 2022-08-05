import React from "react";
import { Link } from 'react-router-dom';
import { TabTitle } from '../../Components/Common/CommonFunction'
import "./error.css";

const Error = ({path}) => {

  TabTitle(path)

  return (
    <>
      <div className="pages_container_outter flex jc">
        <div className='pages_inner'>
          <div className='pages_hearder'>{path}</div>
          <div className='pages_content_section flex js ac col'>
            <div className='pages_content'>
              The page you were looking for does not exist.
            </div>
            <div className='pages_content'>
              <Link to='/' className='link navigate_home timeline_underline'>
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
