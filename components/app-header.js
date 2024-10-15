class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                nav ul {
                    list-style-type: none;
                    padding: 0;
                }
                nav ul li {
                    display: inline;
                    margin-right: 10px;
                }
            </style>
            <header>
                <nav>
                    <ul>
                        <li><a href="#" onclick="route('/')">홈</a></li>
                        <li><a href="#" onclick="route('/profile')">프로필</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('app-header', AppHeader);
