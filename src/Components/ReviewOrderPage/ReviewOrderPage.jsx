import React from 'react';

function ReviewOrderPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* Drawer */}
        <button className="btn btn-outline-light" data-toggle="drawer" data-target="#amazonDrawer">
          <i className="fas fa-sliders-h"></i>
        </button>

        {/* Navbar Brand */}
        <a className="navbar-brand pl-2" href="navbar.html">
          <img src="img/amazon_logo_white.png" height="30" width="100" alt="amazon logo white" />
        </a>

        {/* Navbar Toggler */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Search Form */}
          <form className="form-inline px-lg-5" noValidate method="get">
            {/* Dropdown for Category */}
            <div className="input-group">
              {/* Dropdown Button */}
              <div className="input-group-prepend">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" name="btnCategory" type="button"
                    id="btnCategoryDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    All
                  </button>
                  {/* Dropdown Menu */}
                  <div className="dropdown-menu" aria-labelledby="btnCategoryDropdownMenu">
                    <a className="dropdown-item" href="#">All</a>
                    <a className="dropdown-item" href="#">Smartphone</a>
                    <a className="dropdown-item" href="#">Kitchen Hardware</a>
                    <a className="dropdown-item" href="#">Prime Deals</a>
                    <a className="dropdown-item" href="#">Book</a>
                  </div>
                </div>
              </div>
              {/* Search Input */}
              <input type="text" className="form-control" size="50" name="query" id="query" />
              <input type="text" name="category" id="category" value="book" hidden />
              {/* Search Button */}
              <div className="input-group-append">
                <button type="submit" className="btn btn-warning">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>

          {/* Other Navbar Items */}
          <ul className="navbar-nav">
            {/* Preferred Language Dropdown */}
            <li className="nav-item dropdown px-2">
              <a className="nav-link" href="#" id="prefLanguageDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-2x fa-language"></i>
              </a>
              {/* Language Dropdown Menu */}
              <div className="dropdown-menu" aria-labelledby="prefLanguageDropdown">
                {/* Language Options */}
                <form className="p-3">
                  {/* Language Options Here */}
                </form>
              </div>
            </li>
            {/* User Account Dropdown */}
            <li className="nav-item dropdown px-2">
              <a className="nav-link" href="login.html" id="userAccount" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-2x fa-user-circle"></i>
              </a>
              {/* User Account Dropdown Menu */}
              <div className="dropdown-menu px-3" aria-labelledby="userAccount">
                {/* User Account Options Here */}
              </div>
            </li>
            {/* Shopping Cart */}
            <li className="nav-item px-2">
              <a className="nav-link" href="#" aria-disabled="true">
                <i className="fas fa-2x text-light fa-shopping-cart"></i>
                <span className="badge badge-warning badge-pill">0</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Review Order */}
      <div className="container my-5">
        {/* Progress Status */}
        {/* Progress Bar */}
        {/* Review Order Content */}
      </div>

      {/* Optional JavaScript */}
      {/* JavaScript Imports */}
    </>
  );
}

export default ReviewOrderPage;
