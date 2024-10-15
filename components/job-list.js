class JobList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.jobs = [];
    }

    static get observedAttributes() {
        return ['job-service'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'job-service') {
            // JobService 인스턴스를 직접 받도록 수정
            this.jobService = window.jobService;
            this.fetchJobs();
        }
    }

    async fetchJobs() {
        try {
            if (!this.jobService) {
                throw new Error('JobService가 정의되지 않았습니다.');
            }
            this.jobs = await this.jobService.getJobs();
            this.render();
        } catch (error) {
            console.error('구직 목록을 불러오는 데 실패했습니다:', error);
            this.shadowRoot.innerHTML = '<p>구직 목록을 불러오는 데 실패했습니다.</p>';
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <h2>구직 목록</h2>
            ${this.jobs.length === 0 ? '<p>로딩 중...</p>' : `
                <ul>
                    ${this.jobs.map(job => `
                        <li>
                            <h3>${job.title}</h3>
                            <p>${job.description}</p>
                        </li>
                    `).join('')}
                </ul>
            `}
        `;
    }
}

customElements.define('job-list', JobList);
