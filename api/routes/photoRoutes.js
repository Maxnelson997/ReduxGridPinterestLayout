module.exports = (app) => {
    app.get('/api/photos', (req, res) => {
        const photos = [
            'https://images.unsplash.com/photo-1597065886004-bfb7811d73bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
            'https://images.unsplash.com/photo-1597450122094-c9ed4649c16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
            'https://images.unsplash.com/photo-1597421568577-483a951b99e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=704&q=80',
            'https://images.unsplash.com/photo-1595459802544-d6cad89f7ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1584143943712-3079939a511f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=609&q=80'
        ]

        res.send({
            photos
        })
    })
}