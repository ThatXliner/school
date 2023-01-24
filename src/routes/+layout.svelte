<script>
	import '../app.css';
</script>

<slot />
<footer class="footer footer-center p-4 bg-base-300 text-base-content">
	<div>
		<p>
			Copyright © 2023-{new Date().getFullYear()} Bryan Hu (<a
				href="https://github.com/ThatXliner"
				class="link link-hover">@ThatXliner</a
			>) under the
			<a href="https://github.com/ThatXliner/school/blob/main/LICENSE.txt" class="link link-primary"
				>GNU Affero General Public License v3+ (GNU AGPLv3+)</a
			>
		</p>
	</div>
</footer>
