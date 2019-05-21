


const store = {
    getState: function () {
        return {
            topics: [
                "java",
                "scala",
                "python",
                "javascript"
            ],
            comments: {
                'java': [
                    'java is my life',
                    'java is first friend',
                    '....'
                ]
            }
        }
    }
}
export default store;