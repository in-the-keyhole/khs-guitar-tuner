export class PageHeader extends React.Component {
    render(){
        return(
            <div data-role="header" data-poistion="fixed">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}