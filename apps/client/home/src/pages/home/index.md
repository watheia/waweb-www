---
stackbit_url_path: /home/
title: Home
template: advanced
seo:
  type: stackbit_page_meta
  description: The preview of the Starter theme
  extra:
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: 'og:type'
      keyName: property
      value: website
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: 'og:title'
      keyName: property
      value: Stackbit Starter Theme
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: 'og:description'
      keyName: property
      value: The preview of the Starter theme
    - relativeUrl: true
      type: stackbit_page_meta_extra
      name: 'og:image'
      keyName: property
      value: images/starter-preview.png
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: 'twitter:card'
      keyName: name
      value: summary_large_image
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: 'twitter:title'
      keyName: name
      value: Stackbit Starter Theme
    - relativeUrl: false
      type: stackbit_page_meta_extra
      name: 'twitter:description'
      keyName: name
      value: The preview of the Starter theme
    - relativeUrl: true
      type: stackbit_page_meta_extra
      name: 'twitter:image'
      keyName: name
      value: images/starter-preview.png
  title: Stackbit Starter Theme
sections:
  - background:
      background_image_repeat: no-repeat
      background_image_size: cover
      type: hero_section_background
      background_image_opacity: 25
      background_image: 'https://www.datocms-assets.com/49645/1623443608-cover.jpg'
      background_color: blue
    type: hero_section
    image_position: right
    has_background: true
    align: left
    image_alt: Hero placeholder image
    actions:
      - type: action
        new_window: false
        no_follow: false
        style: primary
        url: /capabilities
        label: Learn More
      - type: action
        new_window: false
        no_follow: false
        style: secondary
        url: /contact
        label: Get Support
    subtitle: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus
      quis lorem malesuada luctus.
    title: We build micro frontends!
  - capabilities:
      - title: Capability 1
        align: left
        image: 'https://www.datocms-assets.com/49645/1623441765-feature.svg'
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          maximus nec sapien et porta. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Curabitur ultrices,
          nibh a convallis commodo, felis dui condimentum ligula, eget laoreet
          augue risus ut neque. Pellentesque ac nulla ante. Pellentesque
          pellentesque sapien eu interdum euismod. Aliquam sit amet tellus
          porttitor, pharetra ligula non, rhoncus lectus. Fusce aliquam arcu a
          quam pulvinar, hendrerit ornare lorem porttitor. Nullam vulputate mi
          felis, id r
        image_position: right
        actions: []
        image_alt: Placeholder
        type: feature
      - title: Capability 2
        align: right
        image: 'https://www.datocms-assets.com/49645/1623441765-feature.svg'
        content: >-
          id rutrum lectus dignissim maximus. Donec dictum dictum orci, sit amet
          posuere velit aliquam et. Nam nec lorem elementum, fermentum nulla
          vitae, mattis enim. Sed quam velit, aliquet et tempus at, ultrices et
          purus. Mauris id sapien consequat, tincidunt enim et, viverra est.
          Aliquam ipsum odio, bibendum ac iaculis non, pulvinar eget sem. Sed
          commodo diam ac lectus posuere, et sagittis neque dictum. Etiam eu
          sodales ex.
        image_position: left
        actions:
          - type: action
            new_window: false
            no_follow: false
            style: link
            url: '#'
            label: Learn More
        image_alt: Placeholder
        type: feature
      - title: Capability 3
        align: left
        image: 'https://www.datocms-assets.com/49645/1623441765-feature.svg'
        content: >-
          Morbi aliquam orci et lacus cursus, dictum gravida velit cursus.
          Aliquam elementum rutrum libero sed vulputate. Fusce finibus vel
          tellus et feugiat. Maecenas vitae est ut tortor pellentesque mollis.
          Duis posuere eget eros in suscipit.
        image_position: right
        actions: []
        type: feature
    type: features_section
    title: Proven Capabilities
  - type: blog_feed_section
    recent_count: 3
    title: What's New
    show_recent: true
  - has_background: true
    background_color: gray
    type: cta_section
    actions:
      - type: action
        new_window: false
        no_follow: false
        style: primary
        url: /features
        label: Learn More
    subtitle: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus
      quis lorem malesuada luctus.
    title: This Is A CTA
---
