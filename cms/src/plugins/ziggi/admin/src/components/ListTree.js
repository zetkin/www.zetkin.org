import React from 'react';

export default function ListTree({level = 0}) {
  /* let items = []

  pages.map(page => {
    if (parentId === 0 && page.attributes.parent.data === null) {
      items.push(page)
      return
    }

    console.log(parentId)
    console.log(page.attributes.title)

    if (page.attributes.parent.data.id === parentId) {
      items.push(page)
    }
  }) */
    /*   const items = pages
    .filter(page => page.attributes.parent.data.id === parentId)
    .sort((a, b) => a.title > b.title ? 1 : -1) */


  if (level > 6) return null

  return (
    <ul>
      <li>Test</li>
      <ListTree level={level + 1} />
    </ul>
  )
}

/* {pages.map((page, index) => {
        return (
          <div key={index}>
            {page.attributes.parent.data == null && <Typography variant='beta'>{page.attributes.title}</Typography>}
            {page.attributes.children.data.length > 0 && page.attributes.children.data.map(p => {
              return (
                <div key={p.id}>
                  <Typography variant='delta'>{p.attributes.title}</Typography>
                </div>
              )
            })}
          </div>
        )
       }) }
 */
