import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import Topbar from '../Topbar'
import './index.scss'

const Layout = () => {
    const [showTags] = useState(true);
    const location = useLocation();
    const shouldHideTags = location.pathname === '/projects';
    return ( 
        <div className="App"> 
          <Topbar />
          <div className="page">
          {showTags && !shouldHideTags && (
              <span className='tags top-tags'>
                <span className='bottom-tag-html'>&lt;html&gt;</span>
                <br/>
                &lt;body&gt;
              </span>
            )}

            <Outlet />
            {showTags && !shouldHideTags && (
              <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
              </span>
            )}
          </div> 
        </div>
    )
}

export default Layout