export async function getAllSuggestVideos() {
  const url =
    'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '0ba78003e6mshe4b8bdbe582d02ap11872fjsn5e4aa5befd4a',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}
