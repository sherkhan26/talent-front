
const spinner = document.getElementById("spinner");
const getClients = async () => {
    try {
        spinner.removeAttribute('hidden');
        const response = await fetch('http://localhost:3000/api/clients', {
            method: 'GET'
        })
        spinner.setAttribute('hidden', '');
        return await response.json()

    } catch (err) {
        console.log(err)
    }
}


const createApp = async () => {
    try {
        const clients = await getClients();
        for (const client of clients) {
            let ul = document.querySelector('.user__list-group')
            const li = document.createElement('li')
            const img = document.createElement('img')
            const h3 = document.createElement('h3')
            const childInfo = document.createElement('div')
            const childText = document.createElement('div')
            const age = document.createElement('h4')
            const titleTalent = document.createElement('h4')
            const dzo = document.createElement('h4')
            const parentFio = document.createElement('h4')
            const parentCompany = document.createElement('h4')
            const lookVideo = document.createElement('h3')
            const modal = document.createElement('div')
            const modalContent = document.createElement('div')
            const span  = document.createElement('span')
            const video = document.createElement('video')
            const source = document.createElement('source')
            li.className = 'user_item'
            img.className = 'user_img'
            lookVideo.className = 'user_lookVideo'
            modal.className = 'modal'
            modalContent.className = 'modal-content'
            span.className = 'close'
            childInfo.className = 'child-info'
            childText.className = 'child-text'

            video.width = '720'
            video.height = '480'
            video.controls = 'controls'

            img.src = client.userImg
            video.src = client.userVideo

            h3.innerHTML = client.surname + ' ' + client.name + ' ' + client.lastName
            age.innerHTML = 'Возраст: ' + client.age
            titleTalent.innerHTML = 'Талант: ' + client.talent.slice(0, 21)
            parentFio.innerHTML = 'ФИО Родителя: '+ client.parentSurname + ' ' + client.parentName + ' ' + client.parentLastName
            dzo.innerHTML = 'Должность: ' + client.dzo
            parentCompany.innerHTML = 'Компания: ' + client.company
            lookVideo.innerHTML = 'Посмотреть видео участника'
            span.innerHTML = '&times;'

            video.append(source)
            modalContent.append(span)
            modalContent.append(video)
            childInfo.append(img)
            childInfo.append(childText)
            childText.append(h3)
            childText.append(age)
            childText.append(titleTalent)
            modal.append(modalContent)
            li.append(childInfo)
            li.append(parentFio)
            li.append(parentCompany)
            li.append(dzo)
            for (let i = 0; i<client.contacts.length; i++) {
                const h4 = document.createElement('h4')
                h4.innerHTML = client.contacts[i].type + ': ' + client.contacts[i].value
                li.append(h4)
            }
            li.append(lookVideo)
            li.append(modal)
            if (client.talent === 'Групповое выступление (Ансамбль, дуэт, трио, квартет)') {
                ul.append(li)
            }
            lookVideo.addEventListener('click', function () {
                modal.style.display = 'block'
            })

            span.addEventListener('click', function () {
                modal.style.display = 'none'
            })
            window.addEventListener('click', function (event) {
                if(event.target === modal) {
                    modal.style.display = "none";
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}

createApp()