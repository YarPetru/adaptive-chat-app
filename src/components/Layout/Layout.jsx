import s from './Layout.module.scss';

const Layout = ({ children }) => {
  return <div className={s.mainContainer}>{children}</div>;
};

export default Layout;
