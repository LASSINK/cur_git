class UserService {
    async getCurrentUser() {
        // 실제로는 API 호출을 하겠지만, 여기서는 더미 데이터를 반환합니다.
        return {
            name: '홍길동',
            email: 'hong@example.com',
            type: 'JobSeeker',
            skills: ['JavaScript', 'React', 'Node.js'],
            experience: 3
        };
    }
}
