import React, {ReactNode} from 'react';

const Layout =({children}: {children: ReactNode[] | ReactNode}) =>{
  return(
    <>
      <div className="layout-container">
        <header className="layout-header">Header</header>
        <main className="layout-main">{children}</main>
      </div>
    </>
  )
}

export default Layout;
