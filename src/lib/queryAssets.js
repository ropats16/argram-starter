// imports
import { prop, propEq, find, pluck, filter } from 'ramda';

// function to fetch posts create from defined contract source
export async function getAssetData() {
  // initialising empty array
  let assets = []

  // fetch request
  await fetch(`https://arweave.net/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: idQuery() })
  })
    // response cleanup
    .then(res => res.json())
    .then(({ data }) => Object.values(data.transactions))
    .then(edges => edges.map((node) => {
      node.map((sub) => {
        // creating object of relevant data for each asset and pushing to 'assets' array
        // contains transaction id, web url for image, title, description, content type, topics (hashtags), post owner, timestamp
        assets.push({
          id: sub.node?.id,
          image: `https://arweave.net/${sub.node?.id}`,
          title: sub.node.tags.find(t => t.name === 'Title')?.value,
          description: sub.node.tags.find(t => t.name === 'Description')?.value,
          type: sub.node.tags.find(t => t.name === 'Type')?.value,
          topics: pluck('value', filter(t => t.name.includes('Topic:'), sub.node.tags)),
          owner: sub.node.tags.find(t => t.name === 'Creator')?.value || sub.node.owner.address,
          ownername: sub.node.tags.find(t => t.name === 'Creator-Name')?.value,
          timestamp: sub.node?.block?.timestamp || Date.now() / 1000
        });
      }
      )
    }))

  // returns 'assets' array on function call
  return assets
}

// query requesting posts referencing the defined contract source
function idQuery() {
  return `
query {
  /* Add query tags here */
  {
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
