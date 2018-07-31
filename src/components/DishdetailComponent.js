import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var dish = this.props.dish;
        console.log(dish);

        if (dish != null) {
            return (
                    <div>
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

}

export default Dishdetail;