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
            this.jobService = JSON.parse(newValue);
            this.fetchJobs();
        }
    }

    async fetchJobs() {
        this.jobs = await this.jobService.getJobs();
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <h2>구직 목록</h2>
            <ul>
                ${this.jobs.map(job => `
                    <li>
                        <h3>${job.title}</h3>
                        <p>${job.description}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }
}

customElements.define('job-list', JobList);
