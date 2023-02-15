const getClients = async () => {
  try {
      const response = await fetch('http://localhost:3000/api/clients', {
          method: 'GET'
      })

      return await response.json()

  } catch (err) {
      console.log(err)
  }
}

const createApp = async () => {
  try {
      const clients = await getClients();
      for (const client of clients) {
          const ul = document.querySelector('.user__list-dancer')
          const li = document.createElement('li')
          const img = document.createElement('img')
          const h3 = document.createElement('h3')
          const titleTalent = document.createElement('h3')
          const dzo = document.createElement('h3')
          const videoBlock = document.createElement('div')
          const video = document.createElement('video')
          const source = document.createElement('source')
          li.className = 'user_item'
          img.className = 'user_img'
          video.width = '720'
          video.height = '480'
          video.controls = 'controls'

          img.src = client.userImg
          h3.innerHTML = client.surname + ' ' + client.name + ' ' + client.lastName
          titleTalent.innerHTML = 'Талант: ' + client.talent
          dzo.innerHTML = 'ДЗО: ' + client.dzo
          video.src = client.userVideo

          video.append(source)
          videoBlock.append(video)
          li.append(img)
          li.append(h3)
          li.append(titleTalent)
          li.append(dzo)
          li.append(videoBlock)
          ul.append(li)

          for (let i = 0; i<client.contacts.length; i++) {
              const h4 = document.createElement('h4')
              h4.innerHTML = client.contacts[i].type + ': ' + client.contacts[i].value
              li.append(h4)
          }
        }
  } catch (err) {
      console.log(err)
  }
}

createApp()