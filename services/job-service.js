class JobService {
    async getJobs() {
        // 실제로는 API 호출을 하겠지만, 여기서는 더미 데이터를 반환합니다.
        return [
            { id: 1, title: '웹 개발자', description: 'React 경험 필요' },
            { id: 2, title: '데이터 분석가', description: 'Python, SQL 능숙자 우대' }
        ];
    }
}
