import { prop, propEq, find, pluck, filter } from 'ramda';

export async function getAssetData() {
  let assets = []
  await fetch(`https://arweave.net/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: idQuery() })
  })
    .then(res => res.json())
    .then(({ data }) => Object.values(data.transactions))
    .then(edges => edges.map((node) => {
      node.map((sub) =>
        assets.push({
          id: sub.node?.id,
          image: `https://arweave.net/${sub.node?.id}`,
          title: prop('value', find(propEq('name', 'Title'), sub.node.tags)),
          description: prop('value', find(propEq('name', 'Description'), sub.node.tags)),
          type: prop('value', find(propEq('name', 'Type'), sub.node.tags)),
          topics: pluck('value', filter(t => t.name.includes('Topic:'), sub.node.tags)),
          owner: prop('value', find(propEq('name', 'Creator'), sub.node.tags)) || sub.node.owner.address,
          timestamp: sub.node?.block?.timestamp || Date.now() / 1000
        })
      )
    }))
  return assets
}

function idQuery() {
  return `
query {
  transactions(tags: [
      { name: "Contract-Src", values: ["jEdfetcqnAB_CAzRynrH9p0ekFIIlmaBmXqtJEwZKaE"] }
    ]) {
    edges {
      node {
        id
        owner {
          address
        }
        tags {
          name
          value
        }
        block {
          timestamp
        }
      }
    }
  }
}
`
}
