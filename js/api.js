export const getUsers = async () => {
  try {
      const response = await fetch('http://localhost:3000/api/clients', {
          method: 'GET'
      })

      return await response.json()

  } catch (err) {
      console.log(err)
  }
}