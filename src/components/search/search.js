import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent
{
    constructor(state) {
        super();
        this.state = state;
    }

    render() {        
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__wrapper">
                <input 
                    class="search__input" 
                    type="text" 
                    placeholder="Найти книгу или автора...." 
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                />
                <img src="/static/search-input.svg" alt="Иконка поиск" />
            </div>
            <button class="search__button" aria-label="Поиск">
                <img src="/static/search-button.svg" alt="Иконка поиск" />
            </button>
        `;
        return this.el;
    }
}