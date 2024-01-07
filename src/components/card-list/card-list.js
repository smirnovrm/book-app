import { DivComponent } from '../../common/div-component';

export class CardList extends DivComponent
{
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        if(this.parentState.loading) {
            this.el.innerHTML = `<div class="card-list__loader">Загрузка...</div>`;
            return this.el;
        }
        this.el.classList.add('card-list');
        this.el.innerHTML = `
            <h1>Найдено книг: ${this.parentState.numFound}</h1>
        `;
        return this.el;
    }
}