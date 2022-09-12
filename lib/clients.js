import client from '../client';
import groq from 'groq'

export async function getClients() {
    const data = await client.fetch(groq`*[_type == "client"]`)
    return data
}