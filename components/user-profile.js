class UserProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.user = null;
    }

    static get observedAttributes() {
        return ['user-service'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'user-service') {
            // UserService 인스턴스를 직접 받도록 수정
            this.userService = window.userService;
            this.fetchUserProfile();
        }
    }

    async fetchUserProfile() {
        try {
            if (!this.userService) {
                throw new Error('UserService가 정의되지 않았습니다.');
            }
            this.user = await this.userService.getCurrentUser();
            this.render();
        } catch (error) {
            console.error('사용자 프로필을 불러오는 데 실패했습니다:', error);
            this.shadowRoot.innerHTML = '<p>사용자 프로필을 불러오는 데 실패했습니다.</p>';
        }
    }

    render() {
        if (!this.user) {
            this.shadowRoot.innerHTML = '<p>로딩 중...</p>';
            return;
        }

        this.shadowRoot.innerHTML = `
            <h2>프로필</h2>
            <p>이름: ${this.user.name}</p>
            <p>이메일: ${this.user.email}</p>
            ${this.user.type === 'JobSeeker' ? `
                <h3>스킬:</h3>
                <ul>
                    ${this.user.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
                <p>경력: ${this.user.experience} 년</p>
            ` : ''}
            ${this.user.type === 'Employer' ? `
                <p>회사: ${this.user.company}</p>
                <p>업종: ${this.user.industry}</p>
            ` : ''}
        `;
    }
}

customElements.define('user-profile', UserProfile);
