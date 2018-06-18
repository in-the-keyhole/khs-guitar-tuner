export class PageFooter extends React.Component {
    render(){
        return(
            <div data-role="footer"   data-position="fixed">
                <button href="#about" className="about" data-role="button" data-theme="b" data-icon="info">
                    About</button>
            </div>
        );
    }
}