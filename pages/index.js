import React from 'react'
import Intro from '../components/Intro/'
import {injectGlobal} from 'styled-components'

injectGlobal`
	@font-face {
		font-family: 'Pridi';
		src: url('/static/font/Pridi-Light.ttf');
	}
	body {
		font-family: 'Pridi';
	}
`

import What from '../components/What/index'
import Who from '../components/Who/index'
import Where from '../components/Where/index'
import When from '../components/When/index'
import Faqs from '../components/FAQs'
import Contact from '../components/Contact'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'

const index = () => (
	<div>		
		{/* <section>
			<Intro />
		</section> */}
		<Navbar />
		<GameBut/>
		<section>
			<What />
		</section>
		<section>
			<Who />
		</section>
		<section>
			<Where />
		</section>
		<section>
			<When />
		</section>
		<section>
			<Faqs />
		</section>
		<section>
			<Contact />
		</section>
	</div>
)

export default index
