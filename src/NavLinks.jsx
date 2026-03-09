/**
 * Desktop-only nav buttons (hidden on mobile via CSS). Each button shows a nav group name.
 * onMouseEnter sets pageId so Submenu can display that group's links. Data comes from data.jsx.
 */
import { useGlobalContext } from './Context';
import sublinks from './data';

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
