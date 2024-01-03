import { DivComponent } from '../../common/div-component';
import './header.css';

export class Header extends DivComponent
{
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
                <div>
                    <img src="/static/logo.svg" alt="Логотип" />
                </div>
                <div class="menu">
                    <a class="menu__item" href="#search">
                        <img src="/static/search.svg" alt="Иконка поиск" />
                        Поиск книг
                    </a>
                    <a class="menu__item" href="#favorites">
                        <img src="/static/favorites.svg" alt="Иконка избранное" />
                        Избранное
                        <div class="menu__favorites">
                            ${this.appState.favorites.length}
                        </div>
                    </a>
                </div>
            
        `;
        return this.el;
    }
}