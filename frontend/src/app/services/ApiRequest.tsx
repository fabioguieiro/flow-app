import axios from 'axios'

export const handlePostRequest = async (flux: any) => {
    try {
        const response = await axios.post(
            'http://127.0.0.1:5000/api/store-data',
            {
                nodes: flux.nodes,
                edges: flux.edges,
            }
        )

        console.log('response: ', response.data)
    } catch (error) {
        console.error('Error making POST request:', error)
    }
}
