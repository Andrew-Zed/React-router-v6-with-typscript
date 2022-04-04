import { Link, useLocation } from 'react-router-dom';
import '../../style.css';

const TabNav = () => {
  const location = useLocation();

  return (
    <div className="tabNav">
      <div className="tabLinks">
        {' '}
        <Link
          to="/tabs/tabs1"
          className={location.pathname === '/tabs/tab1' ? 'tab_active' : ''}
        >
          {' '}
          React Form {' '}
        </Link>
      </div>
      <div className="tabLinks">
        <Link
          to="/tabs/tabs2"
          className={location.pathname === '/tabs/tab2' ? 'tab_active' : ''}
        >
          {' '}
          Todo List{' '}
        </Link>
      </div>
      <div className="tabLinks">
        <Link
          to="/tabs/tabs3"
          className={location.pathname === '/tabs/tab3' ? 'tab_active' : ''}
        >
          {' '}
          Shopping List{' '}
        </Link>
      </div>
    </div>
  );
};

export default TabNav;
