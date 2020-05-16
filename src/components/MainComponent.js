import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import SelectedDish from './SelectedDish';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishID) {
        this.setState({
            selectedDish: dishID
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)} />
                <SelectedDish dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;
