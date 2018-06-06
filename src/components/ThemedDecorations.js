import React from 'react'

class ThemedDecorations extends React.Component {
	render() {
		const childrenWithAddedClass = React.Children.map(this.props.children, child => {
			return (
				<p className={this.props.theme}>{child}</p>
			)	
		});

		return (
			<div>
				{childrenWithAddedClass}
			</div>
		)
	}
}

export default ThemedDecorations;