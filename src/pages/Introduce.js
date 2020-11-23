import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import '../assets/css/Animate.css'
import '../assets/css/main.css'
import StyledText from  '../assets/js/AnimatedText'

const Master = styled.div`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i");


	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;


article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	-webkit-text-size-adjust: none;
}

mark {
	background-color: transparent;
	color: inherit;
}

input::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input, select, textarea {
	-moz-appearance: none;
	-webkit-appearance: none;
	-ms-appearance: none;
	appearance: none;
}

/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		-ms-overflow-style: scrollbar;
	}

	@media screen and (max-width: 480px) {

		html, body {
			min-width: 320px;
		}

	}

	html {
		box-sizing: border-box;
		
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		background: #ffffff;
	}

		body.is-preload *, body.is-preload *:before, body.is-preload *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

/* Type */

	html {
		font-size: 18pt;
	}

		@media screen and (max-width: 1680px) {
			html {
				font-size: 14pt;
			}

		}

		@media screen and (max-width: 1280px) {

			html {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 736px) {

			html {
				font-size: 2pt;
			}

		}

		@media screen and (max-width: 360px) {

			html {
				font-size: 1pt;
			}

		}

	body {
		background-color: #ffffff;
		color: #000000;
	}

	body, input, select, textarea {
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.65;
	}

	a {
		-moz-transition: color 0.2s ease-in-out;
		-webkit-transition: color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out;
		transition: color 0.2s ease-in-out;
		text-decoration: underline;
	}

		a:hover {
			text-decoration: none;
		}

	strong, b {
		font-weight: 400;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2rem 0;
	}

		p.major {
			font-size: 1.25rem;
		}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 300;
		line-height: 1.375;
		letter-spacing: -0.05em;
		margin: 0 0 1rem 0;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}
		a {
			color: inherit;
			text-decoration: none;
		}

	h1 {
		font-size: 3.5rem;
		line-height: 1.2;
	}

	h2 {
		font-size: 2.75rem;
	}

	h3 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1.5rem;
	}

	h5 {
		font-size: 0.9rem;
	}

	h6 {
		font-size: 0.7rem;
	}

	sub {
		font-size: 0.8rem;
		position: relative;
		top: 0.5rem;
	}

	sup {
		font-size: 0.8rem;
		position: relative;
		top: -0.5rem;
	}

	blockquote {
		border-left: solid 4px;
		font-style: italic;
		margin: 0 0 2rem 0;
		padding: 0.5rem 0 0.5rem 2rem;
	}

	code {
		border-radius: 4px;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0.25rem;
		padding: 0.25rem 0.325rem;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0 2rem 0;
	}

		pre code {
			display: block;
			line-height: 1.5;
			padding: 0.75rem 1rem;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 1px;
		margin: 2.5rem 0;
	}

		hr.major {
			margin: 3.5rem 0;
		}

	.align-left {
		text-align: left;
	}

	.align-center {
		text-align: center;
	}

	.align-right {
		text-align: right;
	}

	@media screen and (max-width: 736px) {

		p {
			font-size: 1.1rem;
			margin : 12px;
		}

		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1.25rem;
		}

		h4 {
			font-size: 1.2rem;
		}

	}
	@media screen and (max-width: 400px) {

		p {
			font-size: 0.001rem;
		}

		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1.25rem;
		}

		h4 {
			font-size: 1.2rem;
			font-weight: bold;
		}

	}

	input, select, textarea {
		color: #000000;
	}

	a {
		color: #000000;
	}

		a:hover {
			color: #47D3E5;
		}

	strong, b {
		color: #000000;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #000000;
	}

	blockquote {
		border-left-color: rgba(0, 0, 0, 0.2);
	}

	code {
		background: rgba(0, 0, 0, 0.05);
		border-color: rgba(0, 0, 0, 0.2);
	}

	hr {
		border-bottom-color: rgba(0, 0, 0, 0.2);
	}



/* Button */

	button,
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
		border: 0;
		cursor: pointer;
		display: inline-block;
		font-weight: 400;
		letter-spacing: 0.125em;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		white-space: nowrap;
		font-size: 0.75rem;
		max-width: 20rem;
		height: 3.75rem;
		line-height: 5xem;
		border-radius: 3.75em;
		padding: 0 2.5em;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	@media screen and (max-width: 400px) {

		button,
		.button{
			height : 15rem;
		}

	}


		input[type="submit"].icon:before,
		input[type="reset"].icon:before,
		input[type="button"].icon:before,
		button.icon:before,
		.button.icon:before {
			margin-right: 0.5rem;
		}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.6rem;
			height: 3.325rem;
			line-height: 3.325em;
			border-radius: 3.325em;
			padding: 0.2em;
		}

		input[type="submit"].large,
		input[type="reset"].large,
		input[type="button"].large,
		button.large,
		.button.large {
			font-size: 0.8rem;
			height: 2.5rem;
			line-height: 4em;
			border-radius: 4em;
			padding: 0 3em;
		}

		input[type="submit"].wide,
		input[type="reset"].wide,
		input[type="button"].wide,
		button.wide,
		.button.wide {
			min-width: 14em;
		}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		button.disabled,
		button:disabled,
		.button.disabled,
		.button:disabled {
			pointer-events: none;
			opacity: 0.25;
		}

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		background-color: transparent;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
		color: #000000 !important;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			box-shadow: inset 0 0 0 1px #47D3E5;
			color: #47D3E5 !important;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		button:active,
		.button:active {
			background-color: rgba(71, 211, 229, 0.2);
			box-shadow: inset 0 0 0 1px #47D3E5;
			color: #47D3E5 !important;
		}

		input[type="submit"].primary,
		input[type="reset"].primary,
		input[type="button"].primary,
		button.primary,
		.button.primary {
			background-color: #000000;
			box-shadow: none;
			color: #ffffff !important;
		}

			input[type="submit"].primary:hover,
			input[type="reset"].primary:hover,
			input[type="button"].primary:hover,
			button.primary:hover,
			.button.primary:hover {
				background-color: #47D3E5;
			}

			input[type="submit"].primary:active,
			input[type="reset"].primary:active,
			input[type="button"].primary:active,
			button.primary:active,
			.button.primary:active {
				background-color: #1ebdd1;
			}

/* Form */

	form {
		margin: 0 0 2rem 0;
	}

		form > :last-child {
			margin-bottom: 0;
		}

		form > .fields {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			width: calc(100% + 3rem);
			margin: -1.5rem 0 2rem -1.5rem;
		}

			form > .fields > .field {
				-moz-flex-grow: 0;
				-webkit-flex-grow: 0;
				-ms-flex-grow: 0;
				flex-grow: 0;
				-moz-flex-shrink: 0;
				-webkit-flex-shrink: 0;
				-ms-flex-shrink: 0;
				flex-shrink: 0;
				padding: 1.5rem 0 0 1.5rem;
				width: calc(100% - 1.5rem);
			}

				form > .fields > .field.half {
					width: calc(50% - 0.75rem);
				}

				form > .fields > .field.third {
					width: calc(100%/3 - 0.5rem);
				}

				form > .fields > .field.quarter {
					width: calc(25% - 0.375rem);
				}

		@media screen and (max-width: 480px) {

			form > .fields {
				width: calc(100% + 3rem);
				margin: -1.5rem 0 2rem -1.5rem;
			}

				form > .fields > .field {
					padding: 1.5rem 0 0 1.5rem;
					width: calc(100% - 1.5rem);
				}

					form > .fields > .field.half {
						width: calc(100% - 1.5rem);
					}

					form > .fields > .field.third {
						width: calc(100% - 1.5rem);
					}

					form > .fields > .field.quarter {
						width: calc(100% - 1.5rem);
					}

		}

	label {
		display: block;
		font-size: 0.9rem;
		font-weight: 400;
		margin: 0 0 1rem 0;
	}

	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		background-color: transparent;
		border-radius: 4px;
		border: none;
		border: solid 1px;
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 0.825rem;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		input[type="tel"]:invalid,
		input[type="search"]:invalid,
		input[type="url"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

	select {
		background-size: 1.25rem;
		background-repeat: no-repeat;
		background-position: calc(100% - 1rem) center;
		height: 2.75rem;
		padding-right: 2.75rem;
		text-overflow: ellipsis;
	}

		select:focus::-ms-value {
			background-color: transparent;
		}

		select::-ms-expand {
			display: none;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	input[type="search"],
	input[type="url"],
	select {
		height: 2.75rem;
	}

	textarea {
		padding: 0.75rem 1rem;
	}

	input[type="checkbox"],
	input[type="radio"] {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		float: left;
		margin-right: -2rem;
		opacity: 0;
		width: 1rem;
		z-index: -1;
	}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			text-decoration: none;
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			user-select: none;
			cursor: pointer;
			display: inline-block;
			font-size: 1rem;
			font-weight: 300;
			padding-left: 2.4rem;
			padding-right: 0.75rem;
			position: relative;
			margin-bottom: 0;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				display: inline-block;
				font-style: normal;
				font-variant: normal;
				text-rendering: auto;
				line-height: 1;
				text-transform: none !important;
				font-family: 'Font Awesome 5 Free';
				font-weight: 900;
			}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				border-radius: 4px;
				border: solid 1px;
				content: '';
				display: inline-block;
				font-size: 0.8rem;
				height: 1.65rem;
				left: 0;
				line-height: 1.65rem;
				position: absolute;
				text-align: center;
				top: 0;
				width: 1.65rem;
			}

		input[type="checkbox"]:checked + label:before,
		input[type="radio"]:checked + label:before {
			content: '\f00c';
		}

	input[type="checkbox"] + label:before {
		border-radius: 4px;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		opacity: 1.0;
	}

	:-moz-placeholder {
		opacity: 1.0;
	}

	::-moz-placeholder {
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		opacity: 1.0;
	}

	label {
		color: #000000;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	input[type="search"],
	input[type="url"],
	select,
	textarea {
		border-color: rgba(0, 0, 0, 0.2);
	}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		input[type="tel"]:focus,
		input[type="search"]:focus,
		input[type="url"]:focus,
		select:focus,
		textarea:focus {
			border-color: #47D3E5;
			box-shadow: 0 0 0 1px #47D3E5;
		}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(0, 0, 0, 0.2)' /%3E%3C/svg%3E");
	}

		select option {
			color: #000000;
			background: #ffffff;
		}

	input[type="checkbox"] + label,
	input[type="radio"] + label {
		color: #000000;
	}

		input[type="checkbox"] + label:before,
		input[type="radio"] + label:before {
			border-color: rgba(0, 0, 0, 0.2);
		}

	input[type="checkbox"]:checked + label:before,
	input[type="radio"]:checked + label:before {
		background-color: #000000;
		border-color: #000000;
		color: #ffffff;
	}

	input[type="checkbox"]:focus + label:before,
	input[type="radio"]:focus + label:before {
		border-color: #47D3E5;
		box-shadow: 0 0 0 1px #47D3E5;
	}

	::-webkit-input-placeholder {
		color: rgba(0, 0, 0, 0.75) !important;
	}

	:-moz-placeholder {
		color: rgba(0, 0, 0, 0.75) !important;
	}

	::-moz-placeholder {
		color: rgba(0, 0, 0, 0.75) !important;
	}

	:-ms-input-placeholder {
		color: rgba(0, 0, 0, 0.75) !important;
	}



/* Image */

	.image {
		border: 0;
		border-radius: 4px;
		display: inline-block;
		position: relative;
	}

		.image img {
			display: block;
			border-radius: 4px;
		}

		.image.left, .image.right {
			width: 40%;
			max-width: 10rem;
		}

			.image.left img, .image.right img {
				width: 100%;
			}

		.image.left {
			float: left;
			margin: 0 1.5rem 1rem 0;
			top: 0.25rem;
		}

		.image.right {
			float: right;
			margin: 0 0 1rem 1.5rem;
			top: 0.25rem;
		}

		.image.fit {
			display: block;
			margin: 0 0 2rem 0;
			width: 100%;
		}

			.image.fit img {
				width: 100%;
			}

		.image.main {
			display: block;
			margin: 0 0 3rem 0;
			width: 100%;
		}

			.image.main img {
				width: 100%;
			}

/* List */

	ol {
		list-style: decimal;
		margin: 0 0 2rem 0;
		padding-left: 1.25rem;
	}

		ol li {
			padding-left: 0.25rem;
		}

	ul {
		list-style: disc;
		margin: 0 0 2rem 0;
		padding-left: 1rem;
	}

		ul li {
			padding-left: 0.5rem;
		}

		ul.alt {
			list-style: none;
			padding-left: 0;
		}

			ul.alt li {
				border-top: solid 1px;
				padding: 0.5rem 0;
			}

				ul.alt li:first-child {
					border-top: 0;
					padding-top: 0;
				}

	dl {
		margin: 0 0 2rem 0;
	}

		dl dt {
			display: block;
			font-weight: 400;
			margin: 0 0 1rem 0;
		}

		dl dd {
			margin-left: 2rem;
		}

		dl.style2 dt {
			width: 25%;
			float: left;
		}

		dl.style2 dd {
			width: 70%;
			float: left;
		}

		dl.style2:after {
			content: '';
			display: block;
			clear: both;
		}

	ul.alt li {
		border-top-color: rgba(0, 0, 0, 0.2);
	}

/* Actions */

	ul.actions {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		cursor: default;
		list-style: none;
		margin-left: -1rem;
		padding-left: 0;
	}

		ul.actions li {
			padding: 0 0 0 1rem;
			vertical-align: middle;
		}

		ul.actions.special {
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			width: 100%;
			margin-left: 0;
		}

			ul.actions.special li:first-child {
				padding-left: 0;
			}

		ul.actions.stacked {
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			margin-left: 0;
		}

			ul.actions.stacked li {
				padding: 1.3rem 0 0 0;
			}

				ul.actions.stacked li:first-child {
					padding-top: 0;
				}

		ul.actions.fit {
			width: calc(100% + 1rem);
		}

			ul.actions.fit li {
				-moz-flex-grow: 1;
				-webkit-flex-grow: 1;
				-ms-flex-grow: 1;
				flex-grow: 1;
				-moz-flex-shrink: 1;
				-webkit-flex-shrink: 1;
				-ms-flex-shrink: 1;
				flex-shrink: 1;
				width: 100%;
			}

				ul.actions.fit li > * {
					width: 100%;
				}

			ul.actions.fit.stacked {
				width: 100%;
			}

		@media screen and (max-width: 480px) {

			ul.actions:not(.fixed) {
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				margin-left: 0;
				width: 100% !important;
			}

				ul.actions:not(.fixed) li {
					-moz-flex-grow: 1;
					-webkit-flex-grow: 1;
					-ms-flex-grow: 1;
					flex-grow: 1;
					-moz-flex-shrink: 1;
					-webkit-flex-shrink: 1;
					-ms-flex-shrink: 1;
					flex-shrink: 1;
					padding: 1rem 0 0 0;
					text-align: center;
					width: 100%;
				}

					ul.actions:not(.fixed) li > * {
						width: 100%;
					}

					ul.actions:not(.fixed) li:first-child {
						padding-top: 0;
					}

					ul.actions:not(.fixed) li input[type="submit"],
					ul.actions:not(.fixed) li input[type="reset"],
					ul.actions:not(.fixed) li input[type="button"],
					ul.actions:not(.fixed) li button,
					ul.actions:not(.fixed) li .button {
						width: 100%;
					}

						ul.actions:not(.fixed) li input[type="submit"].icon:before,
						ul.actions:not(.fixed) li input[type="reset"].icon:before,
						ul.actions:not(.fixed) li input[type="button"].icon:before,
						ul.actions:not(.fixed) li button.icon:before,
						ul.actions:not(.fixed) li .button.icon:before {
							margin-left: -0.5rem;
						}

		}

/* Icons */

	ul.icons {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}

		ul.icons li {
			display: inline-block;
			padding: 0 0.75rem 0 0;
		}

			ul.icons li:last-child {
				padding-right: 0;
			}

/* Section/Article */

	section.special, article.special {
		text-align: center;
	}

	header p {
		position: relative;
		margin: -0.65rem 0 1.5rem 0;
		font-style: italic;
	}

	header h1 + p {
		font-size: 1.375rem;
	}

	header h2 + p {
		font-size: 1.25rem;
	}

	header h3 + p {
		font-size: 1.1rem;
	}

	header h4 + p,
	header h5 + p,
	header h6 + p {
		font-size: 0.9rem;
	}

	header p {
		color: rgba(0, 0, 0, 0.75);
	}

/* Table */

	.table-wrapper {
		-webkit-overflow-scrolling: touch;
		margin: 0 0 2rem 0;
		overflow-x: auto;
	}

		.table-wrapper > table {
			margin-bottom: 0;
		}

	table {
		margin: 0 0 2rem 0;
		width: 100%;
	}

		table tbody tr {
			border: solid 1px;
			border-left: 0;
			border-right: 0;
		}

		table td {
			padding: 0.75rem 0.75rem;
		}

		table th {
			font-size: 0.9rem;
			font-weight: 400;
			padding: 0 0.75rem 0.75rem 0.75rem;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px;
		}

		table tfoot {
			border-top: solid 2px;
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px;
				border-left-width: 0;
				border-top-width: 0;
			}

				table.alt tbody tr td:first-child {
					border-left-width: 1px;
				}

			table.alt tbody tr:first-child td {
				border-top-width: 1px;
			}

			table.alt thead {
				border-bottom: 0;
			}

			table.alt tfoot {
				border-top: 0;
			}

		table.fixed {
			table-layout: fixed;
		}

	table tbody tr {
		border-color: rgba(0, 0, 0, 0.2);
	}

		table tbody tr:nth-child(2n + 1) {
			background-color: rgba(0, 0, 0, 0.05);
		}

		table tbody tr.alt {
			background-color: rgba(0, 0, 0, 0.05) !important;
		}

	table th {
		color: #000000;
	}

	table thead {
		border-bottom-color: rgba(0, 0, 0, 0.2);
	}

	table tfoot {
		border-top-color: rgba(0, 0, 0, 0.2);
	}

	table.alt tbody tr td {
		border-color: rgba(0, 0, 0, 0.2);
	}

	table.uniform tbody tr:nth-child(2n + 1) {
		background-color: transparent;
	}

/* Spotlight (transitions) */

	.spotlight.onload-content-fade-up .content {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

	body.is-preload .spotlight.onload-content-fade-up .content {
		-moz-transform: translateY(1rem);
		-webkit-transform: translateY(1rem);
		-ms-transform: translateY(1rem);
		transform: translateY(1rem);
		opacity: 0;
	}

	.spotlight.onload-content-fade-down .content {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

	body.is-preload .spotlight.onload-content-fade-down .content {
		-moz-transform: translateY(-1rem);
		-webkit-transform: translateY(-1rem);
		-ms-transform: translateY(-1rem);
		transform: translateY(-1rem);
		opacity: 0;
	}

	.spotlight.onload-content-fade-left .content {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

	body.is-preload .spotlight.onload-content-fade-left .content {
		-moz-transform: translateX(1rem);
		-webkit-transform: translateX(1rem);
		-ms-transform: translateX(1rem);
		transform: translateX(1rem);
		opacity: 0;
	}

	.spotlight.onload-content-fade-right .content {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

	body.is-preload .spotlight.onload-content-fade-right .content {
		-moz-transform: translateX(-1rem);
		-webkit-transform: translateX(-1rem);
		-ms-transform: translateX(-1rem);
		transform: translateX(-1rem);
		opacity: 0;
	}

	.spotlight.onload-content-fade-in .content {
		-moz-transition: opacity 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out;
	}

	body.is-preload .spotlight.onload-content-fade-in .content {
		opacity: 0;
	}

	.spotlight.onload-image-fade-up .image {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

		.spotlight.onload-image-fade-up .image img {
			-moz-transition: opacity 0.75s ease-in-out;
			-webkit-transition: opacity 0.75s ease-in-out;
			-ms-transition: opacity 0.75s ease-in-out;
			transition: opacity 0.75s ease-in-out;
			-moz-transition-delay: 0.5625s;
			-webkit-transition-delay: 0.5625s;
			-ms-transition-delay: 0.5625s;
			transition-delay: 0.5625s;
		}

	body.is-preload .spotlight.onload-image-fade-up .image {
		-moz-transform: translateY(1rem);
		-webkit-transform: translateY(1rem);
		-ms-transform: translateY(1rem);
		transform: translateY(1rem);
		opacity: 0;
	}

		body.is-preload .spotlight.onload-image-fade-up .image img {
			opacity: 0;
		}

	.spotlight.onload-image-fade-down .image {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

		.spotlight.onload-image-fade-down .image img {
			-moz-transition: opacity 0.75s ease-in-out;
			-webkit-transition: opacity 0.75s ease-in-out;
			-ms-transition: opacity 0.75s ease-in-out;
			transition: opacity 0.75s ease-in-out;
			-moz-transition-delay: 0.5625s;
			-webkit-transition-delay: 0.5625s;
			-ms-transition-delay: 0.5625s;
			transition-delay: 0.5625s;
		}

	body.is-preload .spotlight.onload-image-fade-down .image {
		-moz-transform: translateY(-1rem);
		-webkit-transform: translateY(-1rem);
		-ms-transform: translateY(-1rem);
		transform: translateY(-1rem);
		opacity: 0;
	}

		body.is-preload .spotlight.onload-image-fade-down .image img {
			opacity: 0;
		}

	.spotlight.onload-image-fade-left .image {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

		.spotlight.onload-image-fade-left .image img {
			-moz-transition: opacity 0.75s ease-in-out;
			-webkit-transition: opacity 0.75s ease-in-out;
			-ms-transition: opacity 0.75s ease-in-out;
			transition: opacity 0.75s ease-in-out;
			-moz-transition-delay: 0.5625s;
			-webkit-transition-delay: 0.5625s;
			-ms-transition-delay: 0.5625s;
			transition-delay: 0.5625s;
		}

	body.is-preload .spotlight.onload-image-fade-left .image {
		-moz-transform: translateX(1rem);
		-webkit-transform: translateX(1rem);
		-ms-transform: translateX(1rem);
		transform: translateX(1rem);
		opacity: 0;
	}

		body.is-preload .spotlight.onload-image-fade-left .image img {
			opacity: 0;
		}

	.spotlight.onload-image-fade-right .image {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

		.spotlight.onload-image-fade-right .image img {
			-moz-transition: opacity 0.75s ease-in-out;
			-webkit-transition: opacity 0.75s ease-in-out;
			-ms-transition: opacity 0.75s ease-in-out;
			transition: opacity 0.75s ease-in-out;
			-moz-transition-delay: 0.5625s;
			-webkit-transition-delay: 0.5625s;
			-ms-transition-delay: 0.5625s;
			transition-delay: 0.5625s;
		}

	body.is-preload .spotlight.onload-image-fade-right .image {
		-moz-transform: translateX(-1rem);
		-webkit-transform: translateX(-1rem);
		-ms-transform: translateX(-1rem);
		transform: translateX(-1rem);
		opacity: 0;
	}

		body.is-preload .spotlight.onload-image-fade-right .image img {
			opacity: 0;
		}

	.spotlight.onload-image-fade-in .image img {
		-moz-transition: opacity 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out;
	}

	body.is-preload .spotlight.onload-image-fade-in .image img {
		opacity: 0;
	}

	.spotlight.onscroll-content-fade-up .content {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

	.spotlight.onscroll-content-fade-up.is-inactive .content {
		-moz-transform: translateY(1rem);
		-webkit-transform: translateY(1rem);
		-ms-transform: translateY(1rem);
		transform: translateY(1rem);
		opacity: 0;
	}

	.spotlight.onscroll-content-fade-down .content {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

	.spotlight.onscroll-content-fade-down.is-inactive .content {
		-moz-transform: translateY(-1rem);
		-webkit-transform: translateY(-1rem);
		-ms-transform: translateY(-1rem);
		transform: translateY(-1rem);
		opacity: 0;
	}

	.spotlight.onscroll-content-fade-left .content {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

	.spotlight.onscroll-content-fade-left.is-inactive .content {
		-moz-transform: translateX(1rem);
		-webkit-transform: translateX(1rem);
		-ms-transform: translateX(1rem);
		transform: translateX(1rem);
		opacity: 0;
	}

	.spotlight.onscroll-content-fade-right .content {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

	.spotlight.onscroll-content-fade-right.is-inactive .content {
		-moz-transform: translateX(-1rem);
		-webkit-transform: translateX(-1rem);
		-ms-transform: translateX(-1rem);
		transform: translateX(-1rem);
		opacity: 0;
	}

	.spotlight.onscroll-content-fade-in .content {
		-moz-transition: opacity 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out;
	}

	.spotlight.onscroll-content-fade-in.is-inactive .content {
		opacity: 0;
	}

	.spotlight.onscroll-image-fade-up .image {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

		.spotlight.onscroll-image-fade-up .image img {
			-moz-transition: opacity 0.75s ease-in-out;
			-webkit-transition: opacity 0.75s ease-in-out;
			-ms-transition: opacity 0.75s ease-in-out;
			transition: opacity 0.75s ease-in-out;
			-moz-transition-delay: 0.5625s;
			-webkit-transition-delay: 0.5625s;
			-ms-transition-delay: 0.5625s;
			transition-delay: 0.5625s;
		}

	.spotlight.onscroll-image-fade-up.is-inactive .image {
		-moz-transform: translateY(1rem);
		-webkit-transform: translateY(1rem);
		-ms-transform: translateY(1rem);
		transform: translateY(1rem);
		opacity: 0;
	}

		.spotlight.onscroll-image-fade-up.is-inactive .image img {
			opacity: 0;
		}

	.spotlight.onscroll-image-fade-down .image {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

		.spotlight.onscroll-image-fade-down .image img {
			-moz-transition: opacity 0.75s ease-in-out;
			-webkit-transition: opacity 0.75s ease-in-out;
			-ms-transition: opacity 0.75s ease-in-out;
			transition: opacity 0.75s ease-in-out;
			-moz-transition-delay: 0.5625s;
			-webkit-transition-delay: 0.5625s;
			-ms-transition-delay: 0.5625s;
			transition-delay: 0.5625s;
		}

	.spotlight.onscroll-image-fade-down.is-inactive .image {
		-moz-transform: translateY(-1rem);
		-webkit-transform: translateY(-1rem);
		-ms-transform: translateY(-1rem);
		transform: translateY(-1rem);
		opacity: 0;
	}

		.spotlight.onscroll-image-fade-down.is-inactive .image img {
			opacity: 0;
		}

	.spotlight.onscroll-image-fade-left .image {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

		.spotlight.onscroll-image-fade-left .image img {
			-moz-transition: opacity 0.75s ease-in-out;
			-webkit-transition: opacity 0.75s ease-in-out;
			-ms-transition: opacity 0.75s ease-in-out;
			transition: opacity 0.75s ease-in-out;
			-moz-transition-delay: 0.5625s;
			-webkit-transition-delay: 0.5625s;
			-ms-transition-delay: 0.5625s;
			transition-delay: 0.5625s;
		}

	.spotlight.onscroll-image-fade-left.is-inactive .image {
		-moz-transform: translateX(1rem);
		-webkit-transform: translateX(1rem);
		-ms-transform: translateX(1rem);
		transform: translateX(1rem);
		opacity: 0;
	}

		.spotlight.onscroll-image-fade-left.is-inactive .image img {
			opacity: 0;
		}

	.spotlight.onscroll-image-fade-right .image {
		-moz-transition: opacity 0.75s ease-in-out, -moz-transform 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out, -webkit-transform 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out, -ms-transform 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
	}

		.spotlight.onscroll-image-fade-right .image img {
			-moz-transition: opacity 0.75s ease-in-out;
			-webkit-transition: opacity 0.75s ease-in-out;
			-ms-transition: opacity 0.75s ease-in-out;
			transition: opacity 0.75s ease-in-out;
			-moz-transition-delay: 0.5625s;
			-webkit-transition-delay: 0.5625s;
			-ms-transition-delay: 0.5625s;
			transition-delay: 0.5625s;
		}

	.spotlight.onscroll-image-fade-right.is-inactive .image {
		-moz-transform: translateX(-1rem);
		-webkit-transform: translateX(-1rem);
		-ms-transform: translateX(-1rem);
		transform: translateX(-1rem);
		opacity: 0;
	}

		.spotlight.onscroll-image-fade-right.is-inactive .image img {
			opacity: 0;
		}

	.spotlight.onscroll-image-fade-in .image img {
		-moz-transition: opacity 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out;
	}

	.spotlight.onscroll-image-fade-in.is-inactive .image img {
		opacity: 0;
	}

/* Spotlight (style1) */

	.spotlight.style1 {
		-moz-align-items: -moz-stretch;
		-webkit-align-items: -webkit-stretch;
		-ms-align-items: -ms-stretch;
		align-items: stretch;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-direction: row;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-moz-justify-content: -moz-flex-end;
		-webkit-justify-content: -webkit-flex-end;
		-ms-justify-content: -ms-flex-end;
		justify-content: flex-end;
		position: relative;
		overflow-x: hidden;
		text-align: left;
	}

		.spotlight.style1 .content {
			padding: 7rem 7rem 5rem 7rem ;
			-moz-align-self: center;
			-webkit-align-self: center;
			-ms-align-self: center;
			align-self: center;
			-moz-flex-grow: 1;
			-webkit-flex-grow: 1;
			-ms-flex-grow: 1;
			flex-grow: 1;
			-moz-flex-shrink: 1;
			-webkit-flex-shrink: 1;
			-ms-flex-shrink: 1;
			flex-shrink: 1;
			width: 65%;
			max-width: 64rem;
			margin: 0 auto;
		}

		.spotlight.style1 .image {
			-moz-flex-grow: 0;
			-webkit-flex-grow: 0;
			-ms-flex-grow: 0;
			flex-grow: 0;
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			width: 35%;
			min-width: 25rem;
			border-radius: 0;
		}

			.spotlight.style1 .image img {
				-moz-object-fit: cover;
				-webkit-object-fit: cover;
				-ms-object-fit: cover;
				object-fit: cover;
				-moz-object-position: center;
				-webkit-object-position: center;
				-ms-object-position: center;
				object-position: center;
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 0;
			}

		@media screen and (max-width: 1680px) {

			.spotlight.style1 .content {
				padding: 5rem 5rem 3rem 5rem ;
			}

		}

		@media screen and (max-width: 1280px) {

			.spotlight.style1 .content {
				padding: 4rem 4rem 2rem 4rem ;
			}

		}

		@media screen and (max-width: 980px) {

			.spotlight.style1 .content {
				padding: 3.75rem 3rem 1.75rem 3rem ;
				width: 50%;
				min-width: 0;
			}

			.spotlight.style1 .image {
				width: 50%;
				min-width: 0;
			}

		}

		@media screen and (max-width: 736px) {

			.spotlight.style1 .content {
				padding: 2.5rem 2rem 0.5rem 2rem ;
			}

		}

	@media screen and (max-width: 736px) and (orientation: portrait) {

		.spotlight.style1 {
			-moz-flex-direction: column-reverse;
			-webkit-flex-direction: column-reverse;
			-ms-flex-direction: column-reverse;
			flex-direction: column-reverse;
			text-align: center !important;
		}

			.spotlight.style1 .content {
				width: 100%;
			}

			.spotlight.style1 .image {
				width: 100%;
			}

				.spotlight.style1 .image img {
					position: relative;
				}

	}

		.spotlight.style1.orient-right {
			-moz-flex-direction: row-reverse;
			-webkit-flex-direction: row-reverse;
			-ms-flex-direction: row-reverse;
			flex-direction: row-reverse;
		}

	@media screen and (max-width: 736px) and (orientation: portrait) {

		.spotlight.style1.orient-right {
			-moz-flex-direction: column-reverse;
			-webkit-flex-direction: column-reverse;
			-ms-flex-direction: column-reverse;
			flex-direction: column-reverse;
		}

	}

		.spotlight.style1.content-align-center {
			text-align: center;
		}

		.spotlight.style1.content-align-right {
			text-align: right;
		}

		.spotlight.style1.image-position-left .image img {
			-moz-object-position: left;
			-webkit-object-position: left;
			-ms-object-position: left;
			object-position: left;
		}

		.spotlight.style1.image-position-right .image img {
			-moz-object-position: right;
			-webkit-object-position: right;
			-ms-object-position: right;
			object-position: right;
		}

/* Spotlight (style2) */

	.spotlight.style2 {
		padding: 7rem 7rem 5rem 7rem ;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-direction: row-reverse;
		-webkit-flex-direction: row-reverse;
		-ms-flex-direction: row-reverse;
		flex-direction: row-reverse;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		position: relative;
		overflow-x: hidden;
		text-align: left;
	}

		.spotlight.style2 .content {
			width: 44.5rem;
			max-width: 100%;
		}

		.spotlight.style2 .image {
			-moz-flex-grow: 0;
			-webkit-flex-grow: 0;
			-ms-flex-grow: 0;
			flex-grow: 0;
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			width: 21rem;
			height: 21rem;
			border-radius: 100%;
			margin: 0 3.5rem 2rem 0;
		}

			.spotlight.style2 .image img {
				-moz-object-fit: cover;
				-webkit-object-fit: cover;
				-ms-object-fit: cover;
				object-fit: cover;
				-moz-object-position: center;
				-webkit-object-position: center;
				-ms-object-position: center;
				object-position: center;
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}

		@media screen and (max-width: 1680px) {

			.spotlight.style2 {
				padding: 5rem 5rem 3rem 5rem ;
			}

		}

		@media screen and (max-width: 1280px) {

			.spotlight.style2 {
				padding: 4rem 4rem 2rem 4rem ;
			}

		}

		@media screen and (max-width: 980px) {

			.spotlight.style2 {
				padding: 3.75rem 3rem 1.75rem 3rem ;
			}

				.spotlight.style2 .image {
					width: 18.375rem;
					height: 18.375rem;
				}

		}

		@media screen and (max-width: 736px) {

			.spotlight.style2 {
				padding: 2.5rem 2rem 0.5rem 2rem ;
				-moz-align-items: -moz-flex-start;
				-webkit-align-items: -webkit-flex-start;
				-ms-align-items: -ms-flex-start;
				align-items: flex-start;
			}

				.spotlight.style2 .image {
					width: 15.75rem;
					height: 15.75rem;
					margin: 0 2rem 2rem 0;
				}

		}

		@media screen and (orientation: portrait) {

			.spotlight.style2 {
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				-moz-flex-direction: column-reverse;
				-webkit-flex-direction: column-reverse;
				-ms-flex-direction: column-reverse;
				flex-direction: column-reverse;
				text-align: center !important;
			}

				.spotlight.style2 .content {
					width: 34rem;
					max-width: 100%;
				}

				.spotlight.style2 .image {
					margin-right: 0;
				}

		}

		.spotlight.style2.orient-left {
			-moz-flex-direction: row;
			-webkit-flex-direction: row;
			-ms-flex-direction: row;
			flex-direction: row;
		}

			.spotlight.style2.orient-left .image {
				margin: 0 0 2rem 3.5rem;
			}

			@media screen and (max-width: 736px) {

				.spotlight.style2.orient-left .image {
					margin: 0 0 2rem 2rem;
				}

			}

			@media screen and (orientation: portrait) {

				.spotlight.style2.orient-left {
					-moz-flex-direction: column-reverse;
					-webkit-flex-direction: column-reverse;
					-ms-flex-direction: column-reverse;
					flex-direction: column-reverse;
				}

					.spotlight.style2.orient-left .image {
						margin-left: 0;
					}

			}

		.spotlight.style2.content-align-center {
			text-align: center;
		}

		.spotlight.style2.content-align-right {
			text-align: right;
		}

		.spotlight.style2.image-position-left .image img {
			-moz-object-position: left;
			-webkit-object-position: left;
			-ms-object-position: left;
			object-position: left;
		}

		.spotlight.style2.image-position-right .image img {
			-moz-object-position: right;
			-webkit-object-position: right;
			-ms-object-position: right;
			object-position: right;
		}

/* Spotlight (style3) */

	.spotlight.style3 {
		padding: 7rem 7rem 5rem 7rem ;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-direction: row-reverse;
		-webkit-flex-direction: row-reverse;
		-ms-flex-direction: row-reverse;
		flex-direction: row-reverse;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		position: relative;
		overflow-x: hidden;
		text-align: left;
	}

		.spotlight.style3 .content {
			width: 44.5rem;
			max-width: 100%;
		}

		.spotlight.style3 .image {
			-moz-flex-grow: 0;
			-webkit-flex-grow: 0;
			-ms-flex-grow: 0;
			flex-grow: 0;
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			border-radius: 0;
			border: solid 1px;
			width: 13rem;
			height: 23.11111rem;
			margin-top: 2.5rem;
			margin-bottom: 5rem;
			margin-right: 3.5rem;
		}

			.spotlight.style3 .image img {
				-moz-object-fit: cover;
				-webkit-object-fit: cover;
				-ms-object-fit: cover;
				object-fit: cover;
				-moz-object-position: center;
				-webkit-object-position: center;
				-ms-object-position: center;
				object-position: center;
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 0;
			}

			.spotlight.style3 .image:before {
				content: '';
				display: block;
				background-position: center;
				background-repeat: no-repeat;
				border: solid 1px;
				border-bottom: 0;
			}

			.spotlight.style3 .image:after {
				content: '';
				display: block;
				background-position: center;
				background-repeat: no-repeat;
				border: solid 1px;
				border-top: 0;
			}

			.spotlight.style3 .image:before {
				height: 2.5rem;
				background-size: 64px 32px;
				margin-top: -2.5rem;
				border-radius: 1rem 1rem 0 0;
			}

			.spotlight.style3 .image:after {
				height: 3rem;
				background-size: 64px 32px;
				margin-bottom: -3rem;
				border-radius: 0 0 1rem 1rem;
			}

		@media screen and (max-width: 1680px) {

			.spotlight.style3 {
				padding: 5rem 5rem 3rem 5rem ;
			}

		}

		@media screen and (max-width: 1280px) {

			.spotlight.style3 {
				padding: 4rem 4rem 2rem 4rem ;
			}

		}

		@media screen and (max-width: 980px) {

			.spotlight.style3 {
				padding: 3.75rem 3rem 1.75rem 3rem ;
			}

				.spotlight.style3 .image {
					width: 11.375rem;
					height: 20.22222rem;
					margin-top: 2.1875rem;
					margin-bottom: 4.625rem;
				}

					.spotlight.style3 .image:before {
						height: 2.1875rem;
						background-size: 56px 28px;
						margin-top: -2.1875rem;
						border-radius: 0.875rem 0.875rem 0 0;
					}

					.spotlight.style3 .image:after {
						height: 2.625rem;
						background-size: 56px 28px;
						margin-bottom: -2.625rem;
						border-radius: 0 0 0.875rem 0.875rem;
					}

		}

		@media screen and (max-width: 736px) {

			.spotlight.style3 {
				padding: 2.5rem 2rem 0.5rem 2rem ;
				-moz-align-items: -moz-flex-start;
				-webkit-align-items: -webkit-flex-start;
				-ms-align-items: -ms-flex-start;
				align-items: flex-start;
			}

				.spotlight.style3 .image {
					width: 8.125rem;
					height: 14.44444rem;
					margin-top: 1.5625rem;
					margin-bottom: 3.875rem;
				}

					.spotlight.style3 .image:before {
						height: 1.5625rem;
						background-size: 40px 20px;
						margin-top: -1.5625rem;
						border-radius: 0.625rem 0.625rem 0 0;
					}

					.spotlight.style3 .image:after {
						height: 1.875rem;
						background-size: 40px 20px;
						margin-bottom: -1.875rem;
						border-radius: 0 0 0.625rem 0.625rem;
					}

		}

		@media screen and (orientation: portrait) {

			.spotlight.style3 {
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				-moz-flex-direction: column-reverse;
				-webkit-flex-direction: column-reverse;
				-ms-flex-direction: column-reverse;
				flex-direction: column-reverse;
				text-align: center !important;
			}

				.spotlight.style3 .content {
					width: 34rem;
					max-width: 100%;
				}

				.spotlight.style3 .image {
					margin-right: 0;
					margin-left: 0;
				}

		}

		.spotlight.style3.orient-left {
			-moz-flex-direction: row;
			-webkit-flex-direction: row;
			-ms-flex-direction: row;
			flex-direction: row;
		}

			.spotlight.style3.orient-left .image {
				margin-right: 0;
				margin-left: 3.5rem;
			}

			@media screen and (orientation: portrait) {

				.spotlight.style3.orient-left {
					-moz-flex-direction: column-reverse;
					-webkit-flex-direction: column-reverse;
					-ms-flex-direction: column-reverse;
					flex-direction: column-reverse;
				}

					.spotlight.style3.orient-left .image {
						margin-right: 0;
						margin-left: 0;
					}

			}

		.spotlight.style3.content-align-center {
			text-align: center;
		}

		.spotlight.style3.content-align-right {
			text-align: right;
		}

		.spotlight.style3.image-position-left .image img {
			-moz-object-position: left;
			-webkit-object-position: left;
			-ms-object-position: left;
			object-position: left;
		}

		.spotlight.style3.image-position-right .image img {
			-moz-object-position: right;
			-webkit-object-position: right;
			-ms-object-position: right;
			object-position: right;
		}

/* Spotlight (style4) */

	.spotlight.style4 {
		padding: 7rem 5.25rem 5rem 5.25rem ;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		background-color: inherit;
		position: relative;
		overflow-x: hidden;
		text-align: center;
	}

		.spotlight.style4 .content {
			padding: 3.5rem 3.5rem 1.5rem 3.5rem ;
			position: relative;
			width: 40rem;
			max-width: 50%;
			background-color: inherit;
			border-radius: 0.5rem;
			margin-bottom: 2rem;
			z-index: 1;
		}

		.spotlight.style4 .image {
			-moz-flex-grow: 0;
			-webkit-flex-grow: 0;
			-ms-flex-grow: 0;
			flex-grow: 0;
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			border-radius: 0;
		}

			.spotlight.style4 .image img {
				-moz-object-fit: cover;
				-webkit-object-fit: cover;
				-ms-object-fit: cover;
				object-fit: cover;
				-moz-object-position: center;
				-webkit-object-position: center;
				-ms-object-position: center;
				object-position: center;
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 0;
			}

		@media screen and (max-width: 1680px) {

			.spotlight.style4 {
				padding: 5rem 3.75rem 3rem 3.75rem ;
			}

				.spotlight.style4 .content {
					padding: 2.5rem 2.5rem 0.5rem 2.5rem ;
				}

		}

		@media screen and (max-width: 1280px) {

			.spotlight.style4 {
				padding: 4rem 3rem 2rem 3rem ;
			}

				.spotlight.style4 .content {
					padding: 3rem 3rem 1rem 3rem ;
				}

		}

		@media screen and (max-width: 980px) {

			.spotlight.style4 {
				padding: 3rem 2.25rem 1rem 2.25rem ;
			}

				.spotlight.style4 .content {
					padding: 2.25rem 2.25rem 0.25rem 2.25rem ;
				}

		}

		@media screen and (max-width: 736px) {

			.spotlight.style4 {
				padding: 2rem 1.5rem 0.1rem 1.5rem ;
			}

				.spotlight.style4 .content {
					padding: 1.5rem 1.5rem 0.1rem 1.5rem ;
				}

		}

		@media screen and (max-width: 480px) {

			.spotlight.style4 .content {
				max-width: 80%;
			}

		}

		.spotlight.style4.fullscreen {
			min-height: 100vh;
		}

		.spotlight.style4.halfscreen {
			min-height: 50vh;
		}

		.spotlight.style4.orient-left {
			-moz-justify-content: -moz-flex-start;
			-webkit-justify-content: -webkit-flex-start;
			-ms-justify-content: -ms-flex-start;
			justify-content: flex-start;
			padding-left: 0;
		}

			.spotlight.style4.orient-left .content {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}

		.spotlight.style4.orient-right {
			-moz-justify-content: -moz-flex-end;
			-webkit-justify-content: -webkit-flex-end;
			-ms-justify-content: -ms-flex-end;
			justify-content: flex-end;
			padding-right: 0;
		}

			.spotlight.style4.orient-right .content {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}

		.spotlight.style4.content-align-left {
			text-align: left;
		}

		.spotlight.style4.content-align-right {
			text-align: right;
		}

		.spotlight.style4.image-position-left .image img {
			-moz-object-position: left;
			-webkit-object-position: left;
			-ms-object-position: left;
			object-position: left;
		}

		.spotlight.style4.image-position-right .image img {
			-moz-object-position: right;
			-webkit-object-position: right;
			-ms-object-position: right;
			object-position: right;
		}

/* Spotlight (style5) */

	.spotlight.style5 {
		padding: 7rem 5.25rem 5rem 5.25rem ;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		background-color: inherit;
		position: relative;
		overflow-x: hidden;
		text-align: center;
	}

		.spotlight.style5 .content {
			padding: 3.5rem 3.5rem 1.5rem 3.5rem ;
			position: relative;
			width: 40rem;
			max-width: 52.5%;
			background-color: inherit;
			border-radius: 0.5rem;
			margin-bottom: 2rem;
			z-index: 1;
		}

		.spotlight.style5 .image {
			-moz-flex-grow: 0;
			-webkit-flex-grow: 0;
			-ms-flex-grow: 0;
			flex-grow: 0;
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			border-radius: 0;
		}

			.spotlight.style5 .image img {
				-moz-object-fit: cover;
				-webkit-object-fit: cover;
				-ms-object-fit: cover;
				object-fit: cover;
				-moz-object-position: center;
				-webkit-object-position: center;
				-ms-object-position: center;
				object-position: center;
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 0;
			}

		@media screen and (max-width: 1680px) {

			.spotlight.style5 {
				padding: 5rem 3.75rem 3rem 3.75rem ;
			}

				.spotlight.style5 .content {
					padding: 2.5rem 2.5rem 0.5rem 2.5rem ;
				}

		}

		@media screen and (max-width: 1280px) {

			.spotlight.style5 {
				padding: 4rem 3rem 2rem 3rem ;
			}

				.spotlight.style5 .content {
					padding: 3rem 3rem 1rem 3rem ;
				}

		}

		@media screen and (max-width: 980px) {

			.spotlight.style5 {
				padding: 3rem 2.25rem 1rem 2.25rem ;
			}

				.spotlight.style5 .content {
					padding: 2.25rem 2.25rem 0.25rem 2.25rem ;
				}

		}

		@media screen and (max-width: 736px) {

			.spotlight.style5 {
				padding: 2rem 1.5rem 0.1rem 1.5rem ;
			}

				.spotlight.style5 .content {
					padding: 1.5rem 1.5rem 0.1rem 1.5rem ;
				}

		}

		@media screen and (max-width: 480px) {

			.spotlight.style5 .content {
				max-width: 80%;
			}

		}

		.spotlight.style5.fullscreen {
			min-height: 100vh;
		}

		.spotlight.style5.halfscreen {
			min-height: 50vh;
		}

		.spotlight.style5.orient-left {
			-moz-justify-content: -moz-flex-start;
			-webkit-justify-content: -webkit-flex-start;
			-ms-justify-content: -ms-flex-start;
			justify-content: flex-start;
		}

		.spotlight.style5.orient-right {
			-moz-justify-content: -moz-flex-end;
			-webkit-justify-content: -webkit-flex-end;
			-ms-justify-content: -ms-flex-end;
			justify-content: flex-end;
		}

		.spotlight.style5.content-align-left {
			text-align: left;
		}

		.spotlight.style5.content-align-right {
			text-align: right;
		}

		.spotlight.style5.image-position-left .image img {
			-moz-object-position: left;
			-webkit-object-position: left;
			-ms-object-position: left;
			object-position: left;
		}

		.spotlight.style5.image-position-right .image img {
			-moz-object-position: right;
			-webkit-object-position: right;
			-ms-object-position: right;
			object-position: right;
		}

	.spotlight .image {
		background-color: rgba(0, 0, 0, 0.125);
	}

	.spotlight.invert .image {
		background-color: rgba(255, 255, 255, 0.125);
	}

	.spotlight.style3 .image {
		border-color: rgba(0, 0, 0, 0.2);
		background-color: rgba(0, 0, 0, 0.2);
		border-width: 0;
	}

		.spotlight.style3 .image:before {
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Erect %7Bfill: transparent%3B stroke: rgba(0, 0, 0, 0.2)%3B stroke-width: 1px%3B %7D%3C/style%3E%3Crect rx='4' ry='4' x='11' y='12' width='42' height='8' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
			border-color: rgba(0, 0, 0, 0.2);
			width: 100%;
		}

		.spotlight.style3 .image:after {
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Ecircle %7Bfill: transparent%3B stroke: rgba(0, 0, 0, 0.2)%3B stroke-width: 1px%3B %7D%3C/style%3E%3Ccircle cx='32' cy='16' r='14' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
			border-color: rgba(0, 0, 0, 0.2);
			width: 100%;
		}

	.spotlight.style3.android .image:after {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Erect %7Bfill: transparent%3B stroke: rgba(0, 0, 0, 0.2)%3B stroke-width: 1px%3B %7D%3C/style%3E%3Crect rx='4' ry='4' x='6' y='4' width='52' height='24' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
	}

	.spotlight.style3.invert .image {
		border-color: white;
		background-color: white;
		border-width: 1px;
	}

		.spotlight.style3.invert .image:before {
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Erect %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Crect rx='4' ry='4' x='11' y='12' width='42' height='8' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
			border-color: white;
			width: calc(100% + 2px);
			margin-left: -1px;
		}

		.spotlight.style3.invert .image:after {
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Ecircle %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Ccircle cx='32' cy='16' r='14' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
			border-color: white;
			width: calc(100% + 2px);
			margin-left: -1px;
		}

	.spotlight.style3.invert.android .image:after {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Erect %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Crect rx='4' ry='4' x='6' y='4' width='52' height='24' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
	}

/* Gallery (transitions) */

	.gallery.onload-fade-in article .image img {
		-moz-transition: opacity 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out;
		-moz-transition-delay: 4.8s;
		-webkit-transition-delay: 4.8s;
		-ms-transition-delay: 4.8s;
		transition-delay: 4.8s;
	}

	.gallery.onload-fade-in article:nth-child(1) .image img {
		-moz-transition-delay: 0s;
		-webkit-transition-delay: 0s;
		-ms-transition-delay: 0s;
		transition-delay: 0s;
	}

	.gallery.onload-fade-in article:nth-child(2) .image img {
		-moz-transition-delay: 0.15s;
		-webkit-transition-delay: 0.15s;
		-ms-transition-delay: 0.15s;
		transition-delay: 0.15s;
	}

	.gallery.onload-fade-in article:nth-child(3) .image img {
		-moz-transition-delay: 0.3s;
		-webkit-transition-delay: 0.3s;
		-ms-transition-delay: 0.3s;
		transition-delay: 0.3s;
	}

	.gallery.onload-fade-in article:nth-child(4) .image img {
		-moz-transition-delay: 0.45s;
		-webkit-transition-delay: 0.45s;
		-ms-transition-delay: 0.45s;
		transition-delay: 0.45s;
	}

	.gallery.onload-fade-in article:nth-child(5) .image img {
		-moz-transition-delay: 0.6s;
		-webkit-transition-delay: 0.6s;
		-ms-transition-delay: 0.6s;
		transition-delay: 0.6s;
	}

	.gallery.onload-fade-in article:nth-child(6) .image img {
		-moz-transition-delay: 0.75s;
		-webkit-transition-delay: 0.75s;
		-ms-transition-delay: 0.75s;
		transition-delay: 0.75s;
	}

	.gallery.onload-fade-in article:nth-child(7) .image img {
		-moz-transition-delay: 0.9s;
		-webkit-transition-delay: 0.9s;
		-ms-transition-delay: 0.9s;
		transition-delay: 0.9s;
	}

	.gallery.onload-fade-in article:nth-child(8) .image img {
		-moz-transition-delay: 1.05s;
		-webkit-transition-delay: 1.05s;
		-ms-transition-delay: 1.05s;
		transition-delay: 1.05s;
	}

	.gallery.onload-fade-in article:nth-child(9) .image img {
		-moz-transition-delay: 1.2s;
		-webkit-transition-delay: 1.2s;
		-ms-transition-delay: 1.2s;
		transition-delay: 1.2s;
	}

	.gallery.onload-fade-in article:nth-child(10) .image img {
		-moz-transition-delay: 1.35s;
		-webkit-transition-delay: 1.35s;
		-ms-transition-delay: 1.35s;
		transition-delay: 1.35s;
	}

	.gallery.onload-fade-in article:nth-child(11) .image img {
		-moz-transition-delay: 1.5s;
		-webkit-transition-delay: 1.5s;
		-ms-transition-delay: 1.5s;
		transition-delay: 1.5s;
	}

	.gallery.onload-fade-in article:nth-child(12) .image img {
		-moz-transition-delay: 1.65s;
		-webkit-transition-delay: 1.65s;
		-ms-transition-delay: 1.65s;
		transition-delay: 1.65s;
	}

	.gallery.onload-fade-in article:nth-child(13) .image img {
		-moz-transition-delay: 1.8s;
		-webkit-transition-delay: 1.8s;
		-ms-transition-delay: 1.8s;
		transition-delay: 1.8s;
	}

	.gallery.onload-fade-in article:nth-child(14) .image img {
		-moz-transition-delay: 1.95s;
		-webkit-transition-delay: 1.95s;
		-ms-transition-delay: 1.95s;
		transition-delay: 1.95s;
	}

	.gallery.onload-fade-in article:nth-child(15) .image img {
		-moz-transition-delay: 2.1s;
		-webkit-transition-delay: 2.1s;
		-ms-transition-delay: 2.1s;
		transition-delay: 2.1s;
	}

	.gallery.onload-fade-in article:nth-child(16) .image img {
		-moz-transition-delay: 2.25s;
		-webkit-transition-delay: 2.25s;
		-ms-transition-delay: 2.25s;
		transition-delay: 2.25s;
	}

	.gallery.onload-fade-in article:nth-child(17) .image img {
		-moz-transition-delay: 2.4s;
		-webkit-transition-delay: 2.4s;
		-ms-transition-delay: 2.4s;
		transition-delay: 2.4s;
	}

	.gallery.onload-fade-in article:nth-child(18) .image img {
		-moz-transition-delay: 2.55s;
		-webkit-transition-delay: 2.55s;
		-ms-transition-delay: 2.55s;
		transition-delay: 2.55s;
	}

	.gallery.onload-fade-in article:nth-child(19) .image img {
		-moz-transition-delay: 2.7s;
		-webkit-transition-delay: 2.7s;
		-ms-transition-delay: 2.7s;
		transition-delay: 2.7s;
	}

	.gallery.onload-fade-in article:nth-child(20) .image img {
		-moz-transition-delay: 2.85s;
		-webkit-transition-delay: 2.85s;
		-ms-transition-delay: 2.85s;
		transition-delay: 2.85s;
	}

	.gallery.onload-fade-in article:nth-child(21) .image img {
		-moz-transition-delay: 3s;
		-webkit-transition-delay: 3s;
		-ms-transition-delay: 3s;
		transition-delay: 3s;
	}

	.gallery.onload-fade-in article:nth-child(22) .image img {
		-moz-transition-delay: 3.15s;
		-webkit-transition-delay: 3.15s;
		-ms-transition-delay: 3.15s;
		transition-delay: 3.15s;
	}

	.gallery.onload-fade-in article:nth-child(23) .image img {
		-moz-transition-delay: 3.3s;
		-webkit-transition-delay: 3.3s;
		-ms-transition-delay: 3.3s;
		transition-delay: 3.3s;
	}

	.gallery.onload-fade-in article:nth-child(24) .image img {
		-moz-transition-delay: 3.45s;
		-webkit-transition-delay: 3.45s;
		-ms-transition-delay: 3.45s;
		transition-delay: 3.45s;
	}

	.gallery.onload-fade-in article:nth-child(25) .image img {
		-moz-transition-delay: 3.6s;
		-webkit-transition-delay: 3.6s;
		-ms-transition-delay: 3.6s;
		transition-delay: 3.6s;
	}

	.gallery.onload-fade-in article:nth-child(26) .image img {
		-moz-transition-delay: 3.75s;
		-webkit-transition-delay: 3.75s;
		-ms-transition-delay: 3.75s;
		transition-delay: 3.75s;
	}

	.gallery.onload-fade-in article:nth-child(27) .image img {
		-moz-transition-delay: 3.9s;
		-webkit-transition-delay: 3.9s;
		-ms-transition-delay: 3.9s;
		transition-delay: 3.9s;
	}

	.gallery.onload-fade-in article:nth-child(28) .image img {
		-moz-transition-delay: 4.05s;
		-webkit-transition-delay: 4.05s;
		-ms-transition-delay: 4.05s;
		transition-delay: 4.05s;
	}

	.gallery.onload-fade-in article:nth-child(29) .image img {
		-moz-transition-delay: 4.2s;
		-webkit-transition-delay: 4.2s;
		-ms-transition-delay: 4.2s;
		transition-delay: 4.2s;
	}

	.gallery.onload-fade-in article:nth-child(30) .image img {
		-moz-transition-delay: 4.35s;
		-webkit-transition-delay: 4.35s;
		-ms-transition-delay: 4.35s;
		transition-delay: 4.35s;
	}

	.gallery.onload-fade-in article:nth-child(31) .image img {
		-moz-transition-delay: 4.5s;
		-webkit-transition-delay: 4.5s;
		-ms-transition-delay: 4.5s;
		transition-delay: 4.5s;
	}

	.gallery.onload-fade-in article:nth-child(32) .image img {
		-moz-transition-delay: 4.65s;
		-webkit-transition-delay: 4.65s;
		-ms-transition-delay: 4.65s;
		transition-delay: 4.65s;
	}

	.gallery.onload-fade-in article:nth-child(33) .image img {
		-moz-transition-delay: 4.8s;
		-webkit-transition-delay: 4.8s;
		-ms-transition-delay: 4.8s;
		transition-delay: 4.8s;
	}

	body.is-preload .gallery.onload-fade-in article .image img {
		opacity: 0;
	}

	.gallery.onscroll-fade-in article .image img {
		-moz-transition: opacity 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out;
		-moz-transition-delay: 4.8s;
		-webkit-transition-delay: 4.8s;
		-ms-transition-delay: 4.8s;
		transition-delay: 4.8s;
	}

	.gallery.onscroll-fade-in article:nth-child(1) .image img {
		-moz-transition-delay: 0s;
		-webkit-transition-delay: 0s;
		-ms-transition-delay: 0s;
		transition-delay: 0s;
	}

	.gallery.onscroll-fade-in article:nth-child(2) .image img {
		-moz-transition-delay: 0.15s;
		-webkit-transition-delay: 0.15s;
		-ms-transition-delay: 0.15s;
		transition-delay: 0.15s;
	}

	.gallery.onscroll-fade-in article:nth-child(3) .image img {
		-moz-transition-delay: 0.3s;
		-webkit-transition-delay: 0.3s;
		-ms-transition-delay: 0.3s;
		transition-delay: 0.3s;
	}

	.gallery.onscroll-fade-in article:nth-child(4) .image img {
		-moz-transition-delay: 0.45s;
		-webkit-transition-delay: 0.45s;
		-ms-transition-delay: 0.45s;
		transition-delay: 0.45s;
	}

	.gallery.onscroll-fade-in article:nth-child(5) .image img {
		-moz-transition-delay: 0.6s;
		-webkit-transition-delay: 0.6s;
		-ms-transition-delay: 0.6s;
		transition-delay: 0.6s;
	}

	.gallery.onscroll-fade-in article:nth-child(6) .image img {
		-moz-transition-delay: 0.75s;
		-webkit-transition-delay: 0.75s;
		-ms-transition-delay: 0.75s;
		transition-delay: 0.75s;
	}

	.gallery.onscroll-fade-in article:nth-child(7) .image img {
		-moz-transition-delay: 0.9s;
		-webkit-transition-delay: 0.9s;
		-ms-transition-delay: 0.9s;
		transition-delay: 0.9s;
	}

	.gallery.onscroll-fade-in article:nth-child(8) .image img {
		-moz-transition-delay: 1.05s;
		-webkit-transition-delay: 1.05s;
		-ms-transition-delay: 1.05s;
		transition-delay: 1.05s;
	}

	.gallery.onscroll-fade-in article:nth-child(9) .image img {
		-moz-transition-delay: 1.2s;
		-webkit-transition-delay: 1.2s;
		-ms-transition-delay: 1.2s;
		transition-delay: 1.2s;
	}

	.gallery.onscroll-fade-in article:nth-child(10) .image img {
		-moz-transition-delay: 1.35s;
		-webkit-transition-delay: 1.35s;
		-ms-transition-delay: 1.35s;
		transition-delay: 1.35s;
	}

	.gallery.onscroll-fade-in article:nth-child(11) .image img {
		-moz-transition-delay: 1.5s;
		-webkit-transition-delay: 1.5s;
		-ms-transition-delay: 1.5s;
		transition-delay: 1.5s;
	}

	.gallery.onscroll-fade-in article:nth-child(12) .image img {
		-moz-transition-delay: 1.65s;
		-webkit-transition-delay: 1.65s;
		-ms-transition-delay: 1.65s;
		transition-delay: 1.65s;
	}

	.gallery.onscroll-fade-in article:nth-child(13) .image img {
		-moz-transition-delay: 1.8s;
		-webkit-transition-delay: 1.8s;
		-ms-transition-delay: 1.8s;
		transition-delay: 1.8s;
	}

	.gallery.onscroll-fade-in article:nth-child(14) .image img {
		-moz-transition-delay: 1.95s;
		-webkit-transition-delay: 1.95s;
		-ms-transition-delay: 1.95s;
		transition-delay: 1.95s;
	}

	.gallery.onscroll-fade-in article:nth-child(15) .image img {
		-moz-transition-delay: 2.1s;
		-webkit-transition-delay: 2.1s;
		-ms-transition-delay: 2.1s;
		transition-delay: 2.1s;
	}

	.gallery.onscroll-fade-in article:nth-child(16) .image img {
		-moz-transition-delay: 2.25s;
		-webkit-transition-delay: 2.25s;
		-ms-transition-delay: 2.25s;
		transition-delay: 2.25s;
	}

	.gallery.onscroll-fade-in article:nth-child(17) .image img {
		-moz-transition-delay: 2.4s;
		-webkit-transition-delay: 2.4s;
		-ms-transition-delay: 2.4s;
		transition-delay: 2.4s;
	}

	.gallery.onscroll-fade-in article:nth-child(18) .image img {
		-moz-transition-delay: 2.55s;
		-webkit-transition-delay: 2.55s;
		-ms-transition-delay: 2.55s;
		transition-delay: 2.55s;
	}

	.gallery.onscroll-fade-in article:nth-child(19) .image img {
		-moz-transition-delay: 2.7s;
		-webkit-transition-delay: 2.7s;
		-ms-transition-delay: 2.7s;
		transition-delay: 2.7s;
	}

	.gallery.onscroll-fade-in article:nth-child(20) .image img {
		-moz-transition-delay: 2.85s;
		-webkit-transition-delay: 2.85s;
		-ms-transition-delay: 2.85s;
		transition-delay: 2.85s;
	}

	.gallery.onscroll-fade-in article:nth-child(21) .image img {
		-moz-transition-delay: 3s;
		-webkit-transition-delay: 3s;
		-ms-transition-delay: 3s;
		transition-delay: 3s;
	}

	.gallery.onscroll-fade-in article:nth-child(22) .image img {
		-moz-transition-delay: 3.15s;
		-webkit-transition-delay: 3.15s;
		-ms-transition-delay: 3.15s;
		transition-delay: 3.15s;
	}

	.gallery.onscroll-fade-in article:nth-child(23) .image img {
		-moz-transition-delay: 3.3s;
		-webkit-transition-delay: 3.3s;
		-ms-transition-delay: 3.3s;
		transition-delay: 3.3s;
	}

	.gallery.onscroll-fade-in article:nth-child(24) .image img {
		-moz-transition-delay: 3.45s;
		-webkit-transition-delay: 3.45s;
		-ms-transition-delay: 3.45s;
		transition-delay: 3.45s;
	}

	.gallery.onscroll-fade-in article:nth-child(25) .image img {
		-moz-transition-delay: 3.6s;
		-webkit-transition-delay: 3.6s;
		-ms-transition-delay: 3.6s;
		transition-delay: 3.6s;
	}

	.gallery.onscroll-fade-in article:nth-child(26) .image img {
		-moz-transition-delay: 3.75s;
		-webkit-transition-delay: 3.75s;
		-ms-transition-delay: 3.75s;
		transition-delay: 3.75s;
	}

	.gallery.onscroll-fade-in article:nth-child(27) .image img {
		-moz-transition-delay: 3.9s;
		-webkit-transition-delay: 3.9s;
		-ms-transition-delay: 3.9s;
		transition-delay: 3.9s;
	}

	.gallery.onscroll-fade-in article:nth-child(28) .image img {
		-moz-transition-delay: 4.05s;
		-webkit-transition-delay: 4.05s;
		-ms-transition-delay: 4.05s;
		transition-delay: 4.05s;
	}

	.gallery.onscroll-fade-in article:nth-child(29) .image img {
		-moz-transition-delay: 4.2s;
		-webkit-transition-delay: 4.2s;
		-ms-transition-delay: 4.2s;
		transition-delay: 4.2s;
	}

	.gallery.onscroll-fade-in article:nth-child(30) .image img {
		-moz-transition-delay: 4.35s;
		-webkit-transition-delay: 4.35s;
		-ms-transition-delay: 4.35s;
		transition-delay: 4.35s;
	}

	.gallery.onscroll-fade-in article:nth-child(31) .image img {
		-moz-transition-delay: 4.5s;
		-webkit-transition-delay: 4.5s;
		-ms-transition-delay: 4.5s;
		transition-delay: 4.5s;
	}

	.gallery.onscroll-fade-in article:nth-child(32) .image img {
		-moz-transition-delay: 4.65s;
		-webkit-transition-delay: 4.65s;
		-ms-transition-delay: 4.65s;
		transition-delay: 4.65s;
	}

	.gallery.onscroll-fade-in article:nth-child(33) .image img {
		-moz-transition-delay: 4.8s;
		-webkit-transition-delay: 4.8s;
		-ms-transition-delay: 4.8s;
		transition-delay: 4.8s;
	}

	.gallery.onscroll-fade-in.is-inactive article .image img {
		opacity: 0;
	}

/* Gallery (style1) */

	.gallery.style1 {
		background-color: #000000;
		color: #ffffff;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		position: relative;
		width: 300px;
		background-color: transparent;
	}

		.gallery.style1 input, .gallery.style1 select, .gallery.style1 textarea {
			color: #ffffff;
		}

		.gallery.style1 a {
			color: #ffffff;
		}

			.gallery.style1 a:hover {
				color: #47D3E5;
			}

		.gallery.style1 strong, .gallery.style1 b {
			color: #ffffff;
		}

		.gallery.style1 h1, .gallery.style1 h2, .gallery.style1 h3, .gallery.style1 h4, .gallery.style1 h5, .gallery.style1 h6 {
			color: #ffffff;
		}

		.gallery.style1 blockquote {
			border-left-color: white;
		}

		.gallery.style1 code {
			background: rgba(255, 255, 255, 0.125);
			border-color: white;
		}

		.gallery.style1 hr {
			border-bottom-color: white;
		}

		

		.gallery.style1 > .forward, .gallery.style1 > .backward {
			display: none;
		}

		.gallery.style1 > .inner {
			-moz-align-items: inherit;
			-webkit-align-items: inherit;
			-ms-align-items: inherit;
			align-items: inherit;
			display: inherit;
			-moz-flex-wrap: inherit;
			-webkit-flex-wrap: inherit;
			-ms-flex-wrap: inherit;
			flex-wrap: inherit;
			-moz-justify-content: inherit;
			-webkit-justify-content: inherit;
			-ms-justify-content: inherit;
			justify-content: inherit;
		}

		.gallery.style1 article {
			overflow: hidden;
			position: relative;
			width: 25%;
		}

			.gallery.style1 article .image {
				-moz-transition: opacity 0.2s ease-in-out;
				-webkit-transition: opacity 0.2s ease-in-out;
				-ms-transition: opacity 0.2s ease-in-out;
				transition: opacity 0.2s ease-in-out;
				display: block;
				width: 50%;
				border-radius: 0;
			}

				.gallery.style1 article .image img {
					display: block;
					width: 100%;
					border-radius: 0;
				}

			.gallery.style1 article .caption {
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				-moz-justify-content: center;
				-webkit-justify-content: center;
				-ms-justify-content: center;
				justify-content: center;
				pointer-events: none;
				-moz-transition: opacity 0.2s ease-in-out;
				-webkit-transition: opacity 0.2s ease-in-out;
				-ms-transition: opacity 0.2s ease-in-out;
				transition: opacity 0.2s ease-in-out;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				opacity: 0;
				padding: 2rem;
				z-index: 1;
				font-size: 0.8rem;
			}

				.gallery.style1 article .caption a {
					pointer-events: auto;
				}

				.gallery.style1 article .caption h2, .gallery.style1 article .caption h3, .gallery.style1 article .caption h4, .gallery.style1 article .caption h5, .gallery.style1 article .caption h6 {
					font-size: 1rem;
					margin-bottom: 0.25rem;
				}

				.gallery.style1 article .caption > * {
					max-width: 100%;
					margin-bottom: 1rem;
				}

				.gallery.style1 article .caption > :last-child {
					margin-bottom: 0;
				}

			.gallery.style1 article:hover .caption {
				opacity: 1;
			}

		@media screen and (max-width: 1280px) {

			.gallery.style1 article {
				width: 33.33333%;
			}

				.gallery.style1 article .caption {
					padding: 1rem;
				}

		}

		@media screen and (max-width: 980px) {

			.gallery.style1 article {
				width: 50%;
			}

				.gallery.style1 article .caption {
					padding: 1rem;
				}

		}

		@media screen and (max-width: 480px) {

			.gallery.style1 article {
				width: 100%;
			}

				.gallery.style1 article .caption {
					padding: 1rem;
				}

		}

		.gallery.style1.small article {
			width: 20%;
		}

			.gallery.style1.small article .caption {
				padding: 1rem;
			}

		@media screen and (max-width: 1280px) {

			.gallery.style1.small article {
				width: 25%;
			}

				.gallery.style1.small article .caption {
					padding: 1rem;
				}

		}

		@media screen and (max-width: 980px) {

			.gallery.style1.small article {
				width: 33.33333%;
			}

				.gallery.style1.small article .caption {
					padding: 1rem;
				}

		}

		@media screen and (max-width: 480px) {

			.gallery.style1.small article {
				width: 50%;
			}

				.gallery.style1.small article .caption {
					padding: 1rem;
				}

		}

		.gallery.style1.big article {
			width: 33.33333%;
		}

			.gallery.style1.big article .caption {
				padding: 3rem;
			}

		@media screen and (max-width: 1280px) {

			.gallery.style1.big article {
				width: 50%;
			}

				.gallery.style1.big article .caption {
					padding: 2rem;
				}

		}

		@media screen and (max-width: 980px) {

			.gallery.style1.big article {
				width: 50%;
			}

				.gallery.style1.big article .caption {
					padding: 2rem;
				}

		}

		@media screen and (max-width: 480px) {

			.gallery.style1.big article {
				width: 100%;
			}

				.gallery.style1.big article .caption {
					padding: 1rem;
				}

		}

/* Gallery (style2) */

	.gallery.style2 {
		color: #ffffff;
		display: flex;
		-webkit-overflow-scrolling: touch;
		position: relative;
		background-color: transparent;
		
		background-color: #171A21;
	}

		.gallery.style2 input, .gallery.style2 select, .gallery.style2 textarea {
			color: #ffffff;
		}

		.gallery.style2 a {
			color: #ffffff;
		}

			.gallery.style2 a:hover {
				color: #47D3E5;
			}

		.gallery.style2 strong, .gallery.style2 b {
			color: #ffffff;
		}

		.gallery.style2 h1, .gallery.style2 h2, .gallery.style2 h3, .gallery.style2 h4, .gallery.style2 h5, .gallery.style2 h6 {
			color: #ffffff;
		}

		.gallery.style2 blockquote {
			border-left-color: white;
		}

		.gallery.style2 code {
			background: rgba(255, 255, 255, 0.125);
			border-color: white;
		}

		.gallery.style2 hr {
			border-bottom-color: white;
		}

		.gallery.style2 input[type="submit"],
		.gallery.style2 input[type="reset"],
		.gallery.style2 input[type="button"],
		.gallery.style2 button,
		.gallery.style2 .button {
			background-color: transparent;
			box-shadow: inset 0 0 0 1px white;
			color: #ffffff !important;
			height : 2rem;
			width : 5rem; 
		}
		.gallery.style2 > .inner {
			display: inherit;
			overflow-x: auto;
			overflow-y: hidden;
			position: relative;
			width: 100%;
		}

		.gallery.style2 article {
			-moz-flex-grow: 0;
			-webkit-flex-grow: 0;
			-ms-flex-grow: 0;
			flex-grow: 0;
			-moz-flex-shrink: 0;
			-webkit-flex-shrink: 0;
			-ms-flex-shrink: 0;
			flex-shrink: 0;
			display: block;
			position: relative;
			overflow: hidden;
			width: 25%;
		}

			.gallery.style2 article .image {
				display: block;
				width: 100%;
				border-radius: 0;
			}

				.gallery.style2 article .image img {
					display: block;
					width: 100%;
					border-radius: 0;
				}

			.gallery.style2 article .caption {
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				-moz-justify-content: center;
				-webkit-justify-content: center;
				-ms-justify-content: center;
				justify-content: center;
				pointer-events: none;
				-moz-transition: opacity 0.2s ease-in-out;
				-webkit-transition: opacity 0.2s ease-in-out;
				-ms-transition: opacity 0.2s ease-in-out;
				transition: opacity 0.2s ease-in-out;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				opacity: 0;
				padding: 3rem;
				z-index: 1;
				font-size: 0.8rem;
			}

				.gallery.style2 article .caption a {
					pointer-events: auto;
				}

				.gallery.style2 article .caption h2, .gallery.style2 article .caption h3, .gallery.style2 article .caption h4, .gallery.style2 article .caption h5, .gallery.style2 article .caption h6 {
					font-size: 1.25rem;
					margin-bottom: 0.25rem;
				}

				.gallery.style2 article .caption > * {
					max-width: 100%;
					margin-bottom: 1rem;
				}

				.gallery.style2 article .caption > :last-child {
					margin-bottom: 0;
				}

			.gallery.style2 article:hover .caption {
				opacity: 1;
			}

		@media screen and (max-width: 1000px) {
			
			.gallery.style2 article .caption {
				padding: 2rem;
				font-size : 0.1rem;
			}

		}

		@media screen and (max-width: 736px) {

			.gallery.style2 article .caption {
				padding: 2rem;
				font-size : xx-small;
			}
			.gallery.style2 input[type="submit"],
			.gallery.style2 input[type="reset"],
			.gallery.style2 input[type="button"],
			.gallery.style2 button,
			.gallery.style2 .button {
				background-color: transparent;
				box-shadow: inset 0 0 0 1px white;
				color: #ffffff !important;
				height : 7.5rem;
				line-height: 7.5rem;
			}
		}

		.gallery.style2.small article {
			width: 17.5rem;
			
		}

			.gallery.style2.small article .caption {
				padding: 2rem;
			}

		@media screen and (max-width: 980px) {

			.gallery.style2.small article .caption {
				padding: 2rem;
			}

		}

		@media screen and (max-width: 736px) {

			.gallery.style2.small article .caption {
				padding: 2rem;
				font-size : xx-small;	
			}

		}

		.gallery.style2.big article {
			width: 30rem;
		}

			.gallery.style2.big article .caption {
				padding: 4rem;
			}

		@media screen and (max-width: 980px) {

			.gallery.style2.big article .caption {
				padding: 3rem;
			}

		}

		@media screen and (max-width: 736px) {

			.gallery.style2.big article .caption {
				padding: 2rem;
			}

		}

/* Gallery (lightbox) */

	@-moz-keyframes gallery-modal-spinner {
		0% {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@-webkit-keyframes gallery-modal-spinner {
		0% {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@-ms-keyframes gallery-modal-spinner {
		0% {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes gallery-modal-spinner {
		0% {
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	.gallery.lightbox .modal {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		pointer-events: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-moz-transition: opacity 0.5s ease, visibility 0.5s, z-index 0.5s;
		-webkit-transition: opacity 0.5s ease, visibility 0.5s, z-index 0.5s;
		-ms-transition: opacity 0.5s ease, visibility 0.5s, z-index 0.5s;
		transition: opacity 0.5s ease, visibility 0.5s, z-index 0.5s;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		outline: 0;
		background-color: rgba(0, 0, 0, 0.75);
		visibility: none;
		opacity: 0;
		z-index: 0;
	}

		.gallery.lightbox .modal:before {
			-moz-animation: gallery-modal-spinner 1s infinite linear;
			-webkit-animation: gallery-modal-spinner 1s infinite linear;
			-ms-animation: gallery-modal-spinner 1s infinite linear;
			animation: gallery-modal-spinner 1s infinite linear;
			-moz-transition: opacity 0.25s ease;
			-webkit-transition: opacity 0.25s ease;
			-ms-transition: opacity 0.25s ease;
			transition: opacity 0.25s ease;
			-moz-transition-delay: 0.5s;
			-webkit-transition-delay: 0.5s;
			-ms-transition-delay: 0.5s;
			transition-delay: 0.5s;
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			width: 4rem;
			height: 4rem;
			margin: -2rem 0 0 -2rem;
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='96px' height='96px' viewBox='0 0 96 96' zoomAndPan='disable'%3E%3Cstyle%3Ecircle %7Bfill: transparent%3B stroke: %23ffffff%3B stroke-width: 1.5px%3B %7D%3C/style%3E%3Cdefs%3E%3CclipPath id='corner'%3E%3Cpolygon points='0,0 48,0 48,48 96,48 96,96 0,96' /%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23corner)'%3E%3Ccircle cx='48' cy='48' r='32'/%3E%3C/g%3E%3C/svg%3E");
			background-position: center;
			background-repeat: no-repeat;
			background-size: 4rem;
			opacity: 0;
		}

		.gallery.lightbox .modal:after {
			content: '';
			display: block;
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			width: 4rem;
			height: 4rem;
			cursor: pointer;
			background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='64px' viewBox='0 0 64 64' zoomAndPan='disable'%3E%3Cstyle%3Eline %7Bstroke: %23ffffff%3Bstroke-width: 1.5px%3B%7D%3C/style%3E%3Cline x1='20' y1='20' x2='44' y2='44' /%3E%3Cline x1='20' y1='44' x2='44' y2='20' /%3E%3C/svg%3E");
			background-position: center;
			background-repeat: no-repeat;
			background-size: 3rem;
		}

		.gallery.lightbox .modal .inner {
			-moz-transform: translateY(0.75rem);
			-webkit-transform: translateY(0.75rem);
			-ms-transform: translateY(0.75rem);
			transform: translateY(0.75rem);
			-moz-transition: opacity 0.25s ease, -moz-transform 0.25s ease;
			-webkit-transition: opacity 0.25s ease, -webkit-transform 0.25s ease;
			-ms-transition: opacity 0.25s ease, -ms-transform 0.25s ease;
			transition: opacity 0.25s ease, transform 0.25s ease;
			opacity: 0;
		}

			.gallery.lightbox .modal .inner img {
				display: block;
				max-width: 90vw;
				max-height: 85vh;
				box-shadow: 0 1rem 3rem 0 rgba(0, 0, 0, 0.35);
			}

		.gallery.lightbox .modal.visible {
			pointer-events: auto;
			visibility: visible;
			opacity: 1;
			z-index: 10001;
		}

			.gallery.lightbox .modal.visible:before {
				opacity: 1;
			}

		.gallery.lightbox .modal.loaded .inner {
			-moz-transform: translateY(0);
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
			-moz-transition: opacity 0.5s ease, -moz-transform 0.5s ease;
			-webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease;
			-ms-transition: opacity 0.5s ease, -ms-transform 0.5s ease;
			transition: opacity 0.5s ease, transform 0.5s ease;
			opacity: 1;
		}

		.gallery.lightbox .modal.loaded:before {
			-moz-transition-delay: 0s;
			-webkit-transition-delay: 0s;
			-ms-transition-delay: 0s;
			transition-delay: 0s;
			opacity: 0;
		}

	@media screen and (max-width: 980px) {

		.gallery.lightbox .modal .inner img {
			max-width: 100vw;
		}

	}

	.gallery article .image {
		background-color: rgba(0, 0, 0, 0.125);
	}

/* Wrapper (style1) */

	.wrapper.style1 > .inner {
		padding: 7rem 3.5rem 5rem 3.5rem ;
		margin: 0 auto;
		max-width: 100%;
		width: 64rem;
	}

		.wrapper.style1 > .inner.medium {
			width: 48rem;
		}

		.wrapper.style1 > .inner.small {
			width: 32rem;
		}

	@media screen and (max-width: 1680px) {

		.wrapper.style1 > .inner {
			padding: 5rem 2.5rem 3rem 2.5rem ;
		}

	}

	@media screen and (max-width: 1280px) {

		.wrapper.style1 > .inner {
			padding: 4rem 4rem 2rem 4rem ;
		}

	}

	@media screen and (max-width: 980px) {

		.wrapper.style1 > .inner {
			padding: 4.5rem 3rem 2.5rem 3rem ;
		}

	}

	@media screen and (max-width: 736px) {

		.wrapper.style1 > .inner {
			padding: 3rem 2rem 1rem 2rem ;
		}

	}

/* Wrapper (style2) */

	.wrapper.style2 {
		padding: 7rem;
		background-color: #eeeeee;
	}

		.wrapper.style2 > .inner {
			padding: 5.25rem 3.5rem 3.25rem 3.5rem ;
			background-color: #ffffff;
			border-radius: 0.5rem;
			margin: 0 auto;
			max-width: 100%;
			position: relative;
			width: 64rem;
			z-index: 1;
		}

			.wrapper.style2 > .inner.medium {
				width: 48rem;
			}

			.wrapper.style2 > .inner.small {
				width: 32rem;
			}

		@media screen and (max-width: 1680px) {

			.wrapper.style2 {
				padding: 5rem;
			}

				.wrapper.style2 > .inner {
					padding: 3.75rem 2.5rem 1.75rem 2.5rem ;
				}

		}

		@media screen and (max-width: 1280px) {

			.wrapper.style2 {
				padding: 4rem;
			}

				.wrapper.style2 > .inner {
					padding: 3rem 2rem 1rem 2rem ;
				}

		}

		@media screen and (max-width: 980px) {

			.wrapper.style2 {
				padding: 2.25rem;
			}

				.wrapper.style2 > .inner {
					padding: 3rem 2.25rem 1rem 2.25rem ;
				}

		}

		@media screen and (max-width: 736px) {

			.wrapper.style2 {
				padding: 1.5rem;
			}

				.wrapper.style2 > .inner {
					padding: 2rem 1.5rem 0.1rem 1.5rem ;
				}

		}

	#wrapper > .wrapper.style2.invert:not(.color1):not(.color2):not(.color3):not(.color4):not(.color5):not(.color6):not(.color7) {
		background-color: #222222;
	}

	#wrapper > .wrapper.style2.invert > .inner {
		background-color: #000000;
	}


/* Wrapper */

	#wrapper {
		background-color: inherit;
		width: 100%;
		overflow-x: hidden;
	}

		#wrapper > .invert {
			background-color: #000000;
			color: #ffffff;
		}

			
			#wrapper > .invert blockquote {
				border-left-color: white;
			}

			#wrapper > .invert code {
				background: rgba(255, 255, 255, 0.125);
				border-color: white;
			}

			#wrapper > .invert hr {
				border-bottom-color: white;
			}

			#wrapper > .invert .box {
				border-color: white;
			}

		#wrapper > .color1 {
			background-color: #30363d;
		}

		#wrapper > .color2 {
			background-color: #db8992;
		}

		#wrapper > .color3 {
			background-color: #ab7aad;
		}

		#wrapper > .color4 {
			background-color: #897cad;
		}

		#wrapper > .color5 {
			background-color: #7794ce;
		}

		#wrapper > .color6 {
			background-color: #64abb4;
		}

		#wrapper > .color7 {
			background-color: #6ba78c;
		}

		#wrapper.divided > * {
			box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.075);
		}

			#wrapper.divided > *:first-child {
				box-shadow: none !important;
			}

		#wrapper.divided > .invert {
			box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.125);
		}

			#wrapper.divided > .invert:first-child {
				box-shadow: none !important;
			}
`;

var gobin = false;
const Introduce = () => {	
	const random = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);	
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const easterEgg = random(1, 100000);
	const teamButton = "더 알아보기";
    return(
        <div className="is-preload">
			<div id="wrapper" class="divided">
					<section class="spotlight style1 orient-right content-align-left image-position-center" id="first">
						<div class="content">
							<h2>Team Peanut</h2>
							<p>재밌는 디스코드 경험을 해보시고 싶으신가요? <br/>그 여정에 저희 TEAM 땅콩이 함께 하고 싶습니다!</p>
							<p>-팀 땅콩 대표 땅콩</p>
							<ul class="actions stacked">
							<Link to = '/login'><li><button className="button">로그인</button></li></Link>
							{easterEgg > 1 ? (<li><button className = "button" onClick = {window.open("https://discord.gg/Cp5jduJZMn")} target = "blank">팀 땅콩 유저 커뮤니티</button></li>)
							:(<li><button rel = "noreferrer" target = "blank" onClick={window.open("https://team-peanut-unofficial.piko.ml/")} className="button">비공식 사이트 가기</button></li>)}
							</ul>
						</div>
						<div className="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section className = "spotlight style1 orient-left content-align-left image-position-center">
						<div className = "content">
							<h2>비엔나 봇</h2>
							<p>기능이 너무 다양해서 <br/>무엇을 하는 봇인지 궁금할 정도의 봇</p>
							<ul className = "actions stacked">
								<li><button className = "button">소개보기</button></li>
								<li><button className ="button" onClick = {() => alert("제작 중인 시스템입니다")}>제작중</button></li>
							</ul>
						</div>
						<div className = "image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt="" />
						</div>
					</section>

					<section className ="spotlight style1 orient-right content-align-left image-position-center">
						<div className ="content">
							<h2>일정관리 봇</h2>
							<p>팀 땅콩이 프로젝트를 수행하면서 만든 일정관리 봇입니다</p>
							<ul className ="actions stacked">
								<li><button className ="button">소개 보기</button></li>
								<li><button className ="button">봇 초대하기</button></li>
							</ul>
						</div>
						<div className ="image">
							<img src="https://cdn.pixabay.com/photo/2016/02/22/08/29/scenery-1214950_960_720.jpg" alt = ""/>
						</div>
					</section>

					<div>
						<section className = "wrapper style1 align-center">
							<div className = "inner">
								<h2>팀 땅콩 팀원들</h2>
								<p>내용</p>
							</div>
							<h3><strong>봇 개발팀</strong></h3>
							<p>평범하게 봇을 개발하는 팀입니다</p>
							<div className="gallery style2 medium onscroll-fade-in">
								<article>
									<a href="https://github.com/jjun4341" className="image">
										<img src="https://cdn.discordapp.com/avatars/443734180816486441/b87bc59fe1a1de7da5756a557760b2c4.webp?size=256" alt="" />
									</a>
									<div className="caption">
										<p className = "PM" style = {{color : "gold"}}>땅콩(PM) </p>
										<p>학생 개발자이자 팀 대표, 땅콩입니다.</p>
										<ul className ="actions fixed">
											<li><span className ="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a href="https://github.com/JiYeong11" className="image">
										<img src="https://cdn.discordapp.com/avatars/557119176590884864/a_2a5e3920ad489064f2b50630ce050ab1.gif?size=256" alt="" />
									</a>
									<div className="caption">
										<h3>지영</h3>
										<p>파이썬을 다루는 폐인입니다</p>
										<ul className="actions fixed">
											<li><span className="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="https://github.com/bangsejun" className="image">
										<img src="https://media.discordapp.net/attachments/754181625776046146/778546208780058624/emote-6.png?width=677&height=677" alt="" />
									</a>
									<div className = "caption">
										<h3>방세준</h3>
										<p>뭐 다 하고싶은 빵</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="https://github.com/ensuta" className = "image">
										<img src="https://cdn.discordapp.com/avatars/401532480278102027/19ddf68d07bc666121cf62dcda95f761.webp?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>ensuta</h3>
										<p>해커, 보안 <br/>담당 데스</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>
							<br /><br /><br />
							<h3><strong>웹 개발팀</strong></h3>
							<p>해당 홈페이지를 제작, 담당합니다</p>
							<div className = "gallery style2 medium onscroll-fade-in">
								
								<article >
									<a href="images/gallery/fulls/01.jpg" className = "image">
										<img src="ttps://cdn.discordapp.com/avatars/628595345798201355/a_981b316e32a0945fe327b506dcb72a11.gif?size=256" alt="" />
									</a>
									<div className = "caption">
										<h3>파랑 - Back</h3>
										<p>치노를 좋아하는 10덕입니다</p>
										<ul className = "actions fixed">
											<li><span className = "button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article >
									<a href="images/gallery/fulls/01.jpg" class="image">
										<img src="https://imgur.com/M0KveU6.jpg" alt="" />
									</a>
									<div className ="caption">
										<h3>호두과자 - Front</h3>
										<p>프앤 개발자 <br/>호두과자입니다</p>
										<ul className="actions fixed">
											<li><span className="button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" className = "image">
										<img src="https://cdn.discordapp.com/avatars/727486102587310102/f4a4d45699340eadb24645e7c1e6787e.webp?size=128" alt="" />
									</a>
									<div className = "caption">
										<p className = "PM" style = {{color : "gold"}}>냐코(PM) - Design</p>
										<p>냐코는 노잼!</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/01.jpg" className = "image" onMouseEnter = {() => gobin = true} onMouseLeave = {() => gobin = false}>
										{
											gobin === true ? (
												<img src = "https://cdn.discordapp.com/avatars/761220557160579102/38401cf0f5dfe3d08c66d5a8599e1768.webp?size=256" alt = "꼬빈 평상시"/>
											):(
												<img src = "https://cdn.discordapp.com/avatars/761220557160579102/94d3883c7d49f9bbcca6d8e03726f0c1.webp?size=256" alt = "꼬빈 각성"/>
											)
										}
									</a>
									<div className = "caption">
										<h3>버그 - Design</h3>
										<p>이 프사 바퀴벌레 얼굴임 ㅅㄱ~</p>
										<ul className = "actions fixed">
											<li><span className = "button small">{teamButton}</span></li>
										</ul>
									</div>
								</article>
							</div>
						</section>
				</div>
					<br/><br/><br/><br/><br/>

					<footer className = "wrapper style1 align-center">
						<div className = "inner">
							<p>Footer 제작중...</p>
						</div>
					</footer>
                
			</div>
		</div>
    );
}

export default Introduce;