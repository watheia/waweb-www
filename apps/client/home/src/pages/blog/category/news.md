---
stackbit_url_path: /blog/category/news
title: News
template: advanced
seo:
  type: stackbit_page_meta
  description: This is the category archive page
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
      value: Posts in News
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: "og:description"
      keyName: property
      value: This is the category archive page
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
      value: Posts in News
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: "twitter:description"
      keyName: name
      value: This is the category archive page
    - relativeUrl: true
      type: stackbit_page_meta_extra
      name: "twitter:image"
      keyName: name
      value: images/1.png
  title: Posts in News
sections:
  - type: hero_section
    image_position: left
    has_background: false
    align: center
    actions: []
    title: All Posts In News
  - type: blog_feed_section
    category:
      link: blog/category/news
      title: News
      type: category
      id: news
    show_recent: false
---
