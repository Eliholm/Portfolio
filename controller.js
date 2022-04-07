function changeToAboutPage() {
    model.app.page = 'about';
    updateView();
}

function changeToProjectsPage() {
    model.app.page = 'projects';
    updateView();
}

function changeToContactPage() {
    model.app.page = 'contact'
    updateView();
}