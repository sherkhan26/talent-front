export const getClients = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/clients', {
            method: 'GET'
        })

        return await response.json()

    } catch (err) {
        console.log(err)
    }
}

export const sendClientData = async (client, method, id = null) => {
    try {
        const res = await fetch(`http://localhost:3000/api/clients/${method === 'POST' ? '' : id}`, {
            method,
            body: JSON.stringify(client)
        })

        return await res.json()
    } catch (err) {
        console.log(err)
    }
} 

export const deleteClientItem = async (id) => {
    try {
        await fetch(`http://localhost:3000/api/clients/${id}`, {
            method: 'DELETE',
        })
    } catch (err) {
        console.log(err)
    }
}

export const findClient = async (value) => {
    try {
        const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
            method: 'GET'
        })

        return await response.json()
    } catch (err) {
        console.log(err)
    }
}