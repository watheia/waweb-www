---
stackbit_url_path: /blog/
title: Blog
template: advanced
seo:
  type: stackbit_page_meta
  description: This is the blog page
  extra:
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: "og:type"
      keyName: property
      value: website
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: "og:title"
      keyName: property
      value: Blog
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: "og:description"
      keyName: property
      value: This is the blog page
    - relativeUrl: true
      type: stackbit_page_meta_extra
      name: "og:image"
      keyName: property
      value: images/1.png
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: "twitter:card"
      keyName: name
      value: summary_large_image
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: "twitter:title"
      keyName: name
      value: Blog
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: "twitter:description"
      keyName: name
      value: This is the blog page
    - relativeUrl: true
      type: stackbit_page_meta_extra
      name: "twitter:image"
      keyName: name
      value: images/1.png
  title: Blog
sections:
  - type: hero_section
    image_position: left
    has_background: false
    align: center
    actions: []
    title: Blog
  - type: blog_feed_section
    show_recent: false
---
