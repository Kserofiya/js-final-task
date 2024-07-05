import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.id = this.state.id;
    this.$rootElement.textContent = `${this.formatDate} - `;

    const $b = document.createElement('b');
    $b.textContent = " $" + this.state.amount;
    this.$rootElement.appendChild($b);

    const $deleteButton = document.createElement('button');
    $deleteButton.className = "delete-button";
    $deleteButton.id = this.state.id;
    $deleteButton.textContent = "Удалить";
    this.id = this.$rootElement.id;

    this.$rootElement.append($deleteButton);

    $deleteButton.addEventListener('click', this.handleDeleteButton.bind(this));
  }

  handleDeleteButton(){
    this.props.onClick(this.id);
  }

  get formatDate(){
    let dd = this.state.date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = this.state.date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = this.state.date.getFullYear();

    let hh = this.state.date.getHours();

    let minutes = this.state.date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let sec = this.state.date.getSeconds();
  
    return dd + '/' + mm + '/' + yy + ", " + hh + ":" + minutes + ":" + sec;
  }
}
