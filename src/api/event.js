const events = [
    'aaa', 'aab', 'aac',
    'aba', 'abb', 'abc',
    'aca', 'acb', 'acc',
    'caa', 'cab', 'cac',
    'cba', 'cbb', 'cbc',
    'cca', 'ccb', 'ccc',
]

export default {
    getEventCount(text) {
        return events.filter(event => RegExp(text).test(event)).length;
    },
};
