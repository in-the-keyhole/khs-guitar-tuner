import { PageHeader } from "./header";


export class DetailViewHeader extends React.Component{
render(){
    return(
        <div>
            <div data-role = "header">
                <PageHeader title = {this.prop.description}/>
                <a id = "back" href = "#main" data-transition = "slide"
                data-role = "button" data-theme = "d" data-icon = "arrow-l">Back</a>
            </div>
        </div>
    );
}
}
