/**
 * Mobile sidebar overlay. Visible when isSidebarOpen is true (toggle from Navbar).
 * Renders the same sublinks data as Submenu; uses React Router Link for SPA navigation.
 * onClick={closeSidebar} closes the overlay when a link is clicked.
 */
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import sublinks from './data';
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
                    return (
                      <Link key={id} to={url} onClick={closeSidebar}>
                        {icon}
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
