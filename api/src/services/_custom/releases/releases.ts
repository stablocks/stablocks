import { Octokit } from 'octokit'
import config from 'src/../package.json'

const octokit = new Octokit()

export const releases = async () => {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/releases', {
    owner: 'stablocks',
    repo: 'stablocks',
    per_page: 100,
  })

  if (data.length === 0) return []

  const releases: {
    tag: string
    name: string
    body: string
  }[] = []

  data.forEach((release) => {
    releases.push({
      tag: release.tag_name,
      name: release.name,
      body: release.body,
    })
  })

  const currentVersion = config.version

  const currentRelease = releases.find(
    (release) => release.tag === currentVersion
  )

  const currentIndex = releases.indexOf(currentRelease)

  releases.splice(0, currentIndex)

  return releases
}
