watch:
	docker run --rm --label=jekyll --volume=$(shell pwd):/srv/jekyll -it -p 0.0.0.0:4000:4000 jekyll/jekyll jekyll s
