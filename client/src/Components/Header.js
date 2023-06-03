export default function Header() {
    return (
        <div className="header-container">
            <h1>Bucket List</h1>
            <nav>
                <ul>
                    <li>
                        <a href="./">Home</a>
                    </li>
                    <li>
                        <a href="./mylist">My List</a>
                    </li>
                    <li>
                        <a href="./createlist">Create List</a>
                    </li>
                    <li>
                        <a href="./Inspiration">Inspiration</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
