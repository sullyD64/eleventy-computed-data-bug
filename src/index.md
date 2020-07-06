---
title: Eleventy computed data bug demo
layout: base
---

See this issue: [#1303 - Computed global data isn't merged with front matter/directory data](https://github.com/11ty/eleventy/issues/1303)

{% for post in collections.posts %}
[{{post.data.title}} ({{post.url}})]({{post.url}})
{% endfor %}
