<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import katex from 'katex';

	import EquationViewer from './EquationViewer.svelte';

	import LogToExp from './LogToExp.svelte';
	import ProductProperty from './ProductProperty.svelte';
	import QuotientProperty from './QuotientProperty.svelte';
	import PowerProperty from './PowerProperty.svelte';
	import InverseProperty from './InverseProperty.svelte';

	const latex = (x: string) => katex.renderToString(x);
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap
			.to('#first-scroll-button', { y: '-=100px', ease: 'sine.inOut', duration: 1.5 })
			.yoyo(true)
			.repeat(-1);
		let introTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#intro',
				start: 'top center-=250',
				end: '+=500',
				scrub: 1,
				pin: true,
				once: true
			}
		});
		introTimeline.from('#intro >*', { opacity: 0, duration: 1, stagger: 1.5 });

		let propertyTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#properties',
				start: 'center bottom',
				end: '+=500',
				onLeave: () => {
					propertyTimeline.seek('end');
				}
			}
		});

		propertyTimeline.from('#properties > h2', { opacity: 0, duration: 2 });
		propertyTimeline.from('#properties > table', { opacity: 0, duration: 2 });
		propertyTimeline.from('#properties > table > tbody > tr', {
			opacity: 0,
			duration: 0.5,
			stagger: 1
		});
		propertyTimeline.addLabel('end');

		let baseChangeTimline = gsap.timeline({
			scrollTrigger: {
				trigger: '#change-base',
				start: 'top center-=250',
				end: '+=500',
				scrub: 1,
				pin: true,
				once: true
			}
		});
		baseChangeTimline.from('#change-base >*', { opacity: 0, duration: 1, stagger: 1.5 });
		baseChangeTimline.from('#change-base > ul > *', { opacity: 0, duration: 1, stagger: 1.5 });
	});
</script>

<svelte:head>
	<!-- For KaTeX -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
		integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
		crossorigin="anonymous"
	/>
</svelte:head>
<section class="text-center h-[69vh] flex flex-col">
	<h1>
		THE <span id="log"><span>LOG</span></span> PROJECT
	</h1>
	<i class="text-5xl flex-auto">By Bryan Hu</i>
	<p class="text-4xl flex-auto">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			id="first-scroll-button"
			class="card w-16 h-16 inline bg-accent/50 rounded-full"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
			/>
		</svg>
	</p>
</section>
<section id="intro" class="h-screen text-center space-y-5">
	<h2>A logarithm...</h2>
	<p class="text-4xl p-4 bg-base-200 rounded-box w-fit mx-auto">
		{@html latex(`\\log_{b}{x}`)}
	</p>
	<p class="text-4xl">Is just another way to write an exponential equation</p>
	<div class="flex justify-center"><LogToExp /></div>
	<div class="text-lg">
		<p>But since some bases are <i>so commonly used</i>, we have shorthands for them:</p>
		{@html latex(`\\log_{10}{x} = \\log_{}{x}`)}
		<br />
		{@html latex(`\\log_{e}{x} = \\ln{x}`)}, where {@html latex(`e`)} is
		<a href="https://en.wikipedia.org/wiki/E_(mathematical_constant)" class="link link-primary"
			>Euler's number
		</a>
	</div>
</section>
<section id="properties" class="h-screen">
	<h2 class="my-3 text-center">
		Here are the <i>properties</i> of a <span id="log"><span>log</span></span>
	</h2>

	<table class="table w-fit shadow-lg rounded-box mx-auto">
		<!-- head -->
		<thead>
			<tr>
				<th>Name of Property</th>
				<th>Definition</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Product Property</th>
				<td
					>Adding two logs <b>of the same base</b> is the same as multiplying the parameters together</td
				>
			</tr>
			<tr>
				<th>Quotient Property</th>
				<td
					>Likewise, subtracting 2 logarithms of the same base is the same as dividing the
					parameters</td
				>
			</tr>
			<tr>
				<th>Power Property</th>
				<td
					>But when you multiply a logarithm by a constant, it's the same as raising the argument
					inside of the logarithm to the constant</td
				>
			</tr>
			<tr>
				<th>Inverse Property</th>
				<td
					>It can easily be proven that <svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 inline-block"
						viewBox="0 -750 5469.2 1000"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						style=""
						><defs
							><path
								id="MJX-3-TEX-N-6C"
								d="M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"
							/><path
								id="MJX-3-TEX-N-6F"
								d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"
							/><path
								id="MJX-3-TEX-N-67"
								d="M329 409Q373 453 429 453Q459 453 472 434T485 396Q485 382 476 371T449 360Q416 360 412 390Q410 404 415 411Q415 412 416 414V415Q388 412 363 393Q355 388 355 386Q355 385 359 381T368 369T379 351T388 325T392 292Q392 230 343 187T222 143Q172 143 123 171Q112 153 112 133Q112 98 138 81Q147 75 155 75T227 73Q311 72 335 67Q396 58 431 26Q470 -13 470 -72Q470 -139 392 -175Q332 -206 250 -206Q167 -206 107 -175Q29 -140 29 -75Q29 -39 50 -15T92 18L103 24Q67 55 67 108Q67 155 96 193Q52 237 52 292Q52 355 102 398T223 442Q274 442 318 416L329 409ZM299 343Q294 371 273 387T221 404Q192 404 171 388T145 343Q142 326 142 292Q142 248 149 227T179 192Q196 182 222 182Q244 182 260 189T283 207T294 227T299 242Q302 258 302 292T299 343ZM403 -75Q403 -50 389 -34T348 -11T299 -2T245 0H218Q151 0 138 -6Q118 -15 107 -34T95 -74Q95 -84 101 -97T122 -127T170 -155T250 -167Q319 -167 361 -139T403 -75Z"
							/><path
								id="MJX-3-TEX-I-78"
								d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"
							/><path id="MJX-3-TEX-N-2061" d="" /><path
								id="MJX-3-TEX-N-28"
								d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"
							/><path
								id="MJX-3-TEX-I-79"
								d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"
							/><path
								id="MJX-3-TEX-N-29"
								d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"
							/><path
								id="MJX-3-TEX-N-3D"
								d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
							/></defs
						><g
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							transform="matrix(1 0 0 -1 0 0)"
							><g data-mml-node="math"
								><g data-mml-node="msub"
									><g data-mml-node="mi"
										><use xlink:href="#MJX-3-TEX-N-6C" /><use
											xlink:href="#MJX-3-TEX-N-6F"
											transform="translate(278, 0)"
										/><use xlink:href="#MJX-3-TEX-N-67" transform="translate(778, 0)" /></g
									><g data-mml-node="TeXAtom" transform="translate(1278, -241.4) scale(0.707)"
										><g data-mml-node="mi"><use xlink:href="#MJX-3-TEX-I-78" /></g></g
									></g
								><g data-mml-node="mo" transform="translate(1732.5, 0)"
									><use xlink:href="#MJX-3-TEX-N-2061" /></g
								><g data-mml-node="TeXAtom" transform="translate(1899.1, 0)"
									><g data-mml-node="mo"><use xlink:href="#MJX-3-TEX-N-28" /></g><g
										data-mml-node="msup"
										transform="translate(389, 0)"
										><g data-mml-node="mi"><use xlink:href="#MJX-3-TEX-I-78" /></g><g
											data-mml-node="mi"
											transform="translate(572, 413) scale(0.707)"
											><use xlink:href="#MJX-3-TEX-I-79" /></g
										></g
									><g data-mml-node="mo" transform="translate(1357.5, 0)"
										><use xlink:href="#MJX-3-TEX-N-29" /></g
									></g
								><g data-mml-node="mo" transform="translate(3923.4, 0)"
									><use xlink:href="#MJX-3-TEX-N-3D" /></g
								><g data-mml-node="mi" transform="translate(4979.2, 0)"
									><use xlink:href="#MJX-3-TEX-I-79" /></g
								></g
							></g
						></svg
					>
				</td>
			</tr>
		</tbody>
	</table>
</section>
<section id="try-properties" class="h-fit">
	<h2 class=" text-center">Try them out!</h2>
	<div class="alert shadow-lg w-fit mx-auto my-5">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-info flex-shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span
				>The definitions assume that all bases and parameters of the logarithmic functions are valid
				(i.e. positive and more than 0, respectively)</span
			>
		</div>
	</div>

	<div class="flex space-x-2 mx-3 flex-wrap justify-around space-y-5">
		<ProductProperty />
		<QuotientProperty />
		<PowerProperty />
		<InverseProperty />
	</div>
</section>
<section id="change-base" class="mt-96 h-screen my-3 text-center">
	<h2>One more thing: <b><i>The Change of Base Formula</i></b></h2>
	<p class="text-4xl my-3 mx-auto">
		This formula is defined as <br />
		{@html latex(`\\log_{x}{y} = \\frac{\\log_{b}{y}}{\\log_{b}{x}}`)}<br />
		where {@html latex(`b`)} is any base (e.g. {@html latex(
			`\\log_{7}{49} = \\frac{\\ln{49}}{\\ln{7}}`
		)})
	</p>
	<div class="alert alert-info shadow-lg text-lg max-w-lg mx-auto my-3 text-left">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-current flex-shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span
				>It's helpful when you're solving equations or inequalities algebraically (and don't know
				whether or not you should flip the sign) or when your calculator doesn't have an option to
				use a different base.</span
			>
		</div>
	</div>
	<p class="text-4xl my-3">Some examples are:</p>
	<ul class="text-2xl w-fit mx-auto text-left space-y-3">
		<li><span> - {@html latex(`\\log_{69}{420} = \\frac{\\ln{420}}{\\ln{69}}`)}</span></li>
		<li>
			<span>
				- {@html latex(`\\log_{10}{100} = \\frac{\\ln{100}}{\\ln{10}}`)} (although why would you do that
				when you have {@html latex(`\\log{100}`)})</span
			>
		</li>
		<li>
			<span> - {@html latex(`\\log_{3}{128} = \\frac{\\ln{128}}{\\ln{3}}`)}</span>
		</li>
	</ul>
</section>
<section class="h-screen mt-[50vh]">
	<h2 class="text-center "><span id="log"><span>LOGARITHM</span></span> BUILDER (beta)</h2>
	<EquationViewer />
</section>

<style lang="postcss">
	#log:hover span {
		display: none;
	}
	#log:hover:before {
		content: '\01FAB5';
	}

	/* math {
		font-family: 'Computer Modern', 'Times New Roman', Times, serif;
	} */
	h1 {
		@apply text-9xl;
	}
	h2 {
		@apply text-5xl;
	}
</style>
