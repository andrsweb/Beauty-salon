document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toggleBurgerMenu()
} )

const toggleBurgerMenu = () => {
	const button = document.querySelector( '.burger-button' )
	
	if( ! button ) return

	button.addEventListener( 'click', () => {
		if( ! button.classList.contains( 'opened' ) ) button.classList.add( 'opened' )
		else button.classList.remove( 'opened' )
		
	} )
}