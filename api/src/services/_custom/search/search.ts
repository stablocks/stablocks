import { db } from 'src/lib/db'

type SearchResult = {
  id: string
  title: string
  type: string
}

type QueryOption = {
  id: string
  type?: string
  subSearches?: string[]
  fields?: string[]
  title?: string | string[]
  extraFilters?: object
}

const queryOptions: QueryOption[] = [
  {
    id: 'application',
    fields: ['id'],
    title: 'id',
  },
  {
    id: 'company',
    fields: ['id', 'name', 'website'],
    title: ['name'],
  },
  {
    id: 'contact',
    fields: ['id', 'firstName', 'lastName', 'email'],
    title: ['firstName', 'lastName'],
  },
  { id: 'department', fields: ['id', 'name', 'email'], title: ['name'] },
  {
    id: 'employee',
    type: 'user',
    fields: ['id', 'firstName', 'lastName', 'email'],
    title: ['firstName', 'lastName'],
    extraFilters: {
      OR: [
        {
          type: {
            equals: 'admin',
          },
        },
        {
          type: {
            equals: 'employee',
          },
        },
      ],
    },
  },
  { id: 'expense', fields: ['id', 'name'], title: ['name'] },
  { id: 'income', fields: ['id', 'name'], title: ['name'] },
  { id: 'invoice', fields: ['id'], title: ['id'] },
  { id: 'job', fields: ['id', 'title', 'description'], title: ['title'] },
  { id: 'organization', subSearches: ['employee', 'department'] },
  { id: 'project', fields: ['id', 'title', 'description'], title: ['title'] },
  { id: 'task', fields: ['id', 'title', 'description'], title: ['title'] },
  { id: 'ticket', fields: ['id', 'title', 'description'], title: ['title'] },
]

export const search = async ({
  type,
  query,
}: {
  type: string
  query: string
}) => {
  // Array results will be pushed to
  const results: SearchResult[] = []

  // Ensure query is lowercase
  const theQuery = query.toLocaleLowerCase()

  // Function to generate results objects
  async function generateResults(type: string) {
    // Array to store fields to query db against
    const OR = []

    // Get the option by type from the given options
    const foundOption = queryOptions.find((option) => option.id === type)

    // Return if no option found
    if (!foundOption) return

    if (foundOption.subSearches) {
      // Run generate function with provided sub-searches
      for (let i = 0; i < foundOption.subSearches.length; i++) {
        await generateResults(foundOption.subSearches[i])
      }
    }

    // If no fields or title return (ex. organization which just has sub-searches)
    if (!foundOption.fields || !foundOption.title) return

    // For each given field, add to OR array
    foundOption.fields.forEach((field) => {
      const newFilter = {}
      newFilter[field] = { contains: theQuery, mode: 'insensitive' }
      OR.push(newFilter)
    })

    // Retrieve db entries based on query
    const entries = await db[foundOption.type || type].findMany({
      where: {
        OR,
        // Extra filters provided with the option
        ...foundOption?.extraFilters,
      },
    })

    // Parse entry data and push to results
    entries.forEach((entry) => {
      let title: string
      const givenTitle = foundOption.title

      // Create title value based on option title field(s)
      if (typeof givenTitle === 'string') {
        title = entry[givenTitle]
      } else {
        const titleElements = []

        givenTitle.forEach((element) => {
          titleElements.push(entry[element])
        })

        title = titleElements.join(' ')
      }

      // Push entry data to results
      results.push({
        id: entry.id,
        title,
        type,
      })
    })
  }

  // Generate results for given type and sub-searches
  await generateResults(type)

  // Alphabetize results
  if (results.length > 1) {
    results.sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0))
  }

  return results
}
