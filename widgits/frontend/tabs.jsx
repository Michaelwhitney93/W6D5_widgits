import React from 'react';
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        };
    }

    changeTab(key) {
        return () => this.setState({selected: key});
    }

    render() {

        const tabs = this.props.tabProps.map((prop, index) => {
            return (<span key={index} className={this.state.selected === index ? 'selected' : ''} onClick={this.changeTab(index)}>{prop.title}</span>)
        });
        return (
            <div className="tab">
                <h1>Tabs</h1>
                <div className="tabs">
                    <div className="tab-header">
                        {tabs}
                    </div>
                    <div className="tab-content">
                        <p>{this.props.tabProps[this.state.selected].content}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Tab;