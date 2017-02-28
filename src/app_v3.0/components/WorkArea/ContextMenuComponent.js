/**
 * Created by ruslan on 28.02.17.
 */
import React from 'react'

export default function ContextMenuComponent(props){
		return(
				<div
				onBlur={console.log(25)}
				>
						<ul style={{
								'position': 'absolute',
								'backgroundColor': '#e8e8f5',
								'zIndex': '1',
								'listStyleType': 'none',
								'padding': '1em',
								'top': '0em',
								'left': '1em',
								'cursor': 'auto',
						}}>
								<li>Remove</li>
								<li>Copy</li>
								<li>Paste</li>
						</ul>
				</div>
		);
}