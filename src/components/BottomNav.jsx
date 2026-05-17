import './BottomNav.css';

const BottomNav = () => {
  const navItems = [
    { icon: 'map', label: 'Dest', active: false },
    { icon: 'star', label: 'Trust', active: true },
    { icon: 'history_edu', label: 'Jrnl', active: false },
    { icon: 'mail', label: 'Inq', active: false }
  ];

  return (
    <nav className="bottom-nav">
      <div className="nav-grid">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;