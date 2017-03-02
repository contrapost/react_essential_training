/**
 * Created by alexandershipunov on 02/03/2017.
 **/
const { createElement } = React;
const { render } = ReactDOM;

const style = {
    backgroundColor: 'green',
    color: 'yellow',
    fontFamily: 'verdana'
};

const title = createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'Order is not the boundless resurrection of the ego.'
);

render(
    title,
    document.getElementById('react-container')
);