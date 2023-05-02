import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toggleBurgerMenu()
} )

// Click on burger-menu button
const toggleBurgerMenu = () => {
	const button            = document.querySelector( '.burger-button' )
	const burgerMenuWrapper = document.querySelector( '.burger-menu-wrapper' )
	setTargetElement( document.querySelector( '#body-lock' ) )
	
	if( ! button && ! burgerMenuWrapper ) return

	button.addEventListener( 'click', () => {
		if( ! button.classList.contains( 'opened' ) ) {
			button.classList.add( 'opened' )
			burgerMenuWrapper.classList.add( 'opened' )
			disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
		} 
		else {
			button.classList.remove( 'opened' )
			burgerMenuWrapper.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		} 
	} )

	// Close burger menu by tap anywhere
	document.addEventListener( 'click', e => {
		e.stopPropagation()
		const target = e.target

		if (
			! target.className ||
			target.classList.contains( 'burger-menu-wrapper' ) ||
			target.classList.contains( 'burger-button' )
		) return

		burgerMenuWrapper.classList.remove( 'opened' )
		button.classList.remove( 'opened' )
		enableBodyScroll( getTargetElement() )
	} )

	// If window size = 767 -- remove burger menu and close button
	window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        const WINDOW_WIDTH_MD = 767

        if( windowWidth >= WINDOW_WIDTH_MD &&  burgerMenuWrapper.classList.contains( 'opened' ) ) {
            button.classList.remove( 'opened' )
			burgerMenuWrapper.classList.remove( 'opened' )
            enableBodyScroll( getTargetElement() )
        }
	} )
}