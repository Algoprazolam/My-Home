const app = Vue.createApp({
    data() {
        return {
            mainNavItems: [
                {id: id++, text: 'Vue item 1'},
                {id: id++, text: 'Vue item 2'},
                {id: id++, text: 'Vue item 3'},
                {id: id++, text: 'Vue item 4'},
                {id: id++, text: 'Vue item 5'}
            ]
        }
        
    }
});