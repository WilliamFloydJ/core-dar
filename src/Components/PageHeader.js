function PageHeader() {
  return (
    <header>
      <ul className="linkUl">
        <li>
          <div>
            <a target="_blank" href="https://www.WWGHQ.com/">
              <img
                src="https://wwghq.com/wp-content/uploads/2019/10/Asset-1@2x.png"
                className="logo"
                alt="A white W and Diamond. WWG Logo"
                loading="lazy"
              />
            </a>
          </div>
        </li>
        <li>
          <a target="_blank" href="https://www.Amway.com ">
            <img
              alt="Amway home"
              className="logo amway"
              src="https://www.Amway.com/medias/amway-logo-black.svg?context=bWFzdGVyfGltYWdlc3w0OTI1fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3YS9oNTYvODg4ODM0NDI0ODM1MC5zdmd8YmI0MmY2MzMxZjc2ZmVkZjAzNDAxMjhmOWRlYjYyMzc4ODJmZWQ2ZTQ1MmQ4NDA5YjM2Y2VhNDc2NjFmNzcxYg"
            />
          </a>
        </li>
      </ul>
      <ul className="linkUl mobileColumn">
        <li>CALENDAR</li>
        <li>SESSION</li>
        <li>GOALS</li>
        <li>DAR</li>
      </ul>

      <a className="linkUl center" href="">
        <span id="Login">LOG IN</span>
      </a>
    </header>
  );
}

export default PageHeader;
