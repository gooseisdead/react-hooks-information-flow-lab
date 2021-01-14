function Header({ isDarkMode, localDarkModeClick }) {
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={localDarkModeClick}>
             {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;