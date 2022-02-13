import { publish } from 'gh-pages';

publish("build", {
    message: ':robot: Auto-generated commit', user: {
        name: 'Bryan Hu',
        email: 'ThatXliner@users.noreply.github.com'
    }
}, () => {
    console.log('Deploy Complete!');
})
