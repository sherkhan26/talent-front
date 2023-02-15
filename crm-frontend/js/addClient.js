import { sendClientData } from "./clientsApi.js"
import { createClientsForm } from "./createModalForm.js"
import { validateClientForm } from "./validateForm.js"
import { validateClientContact } from "./validateContact.js"
import { createClientItem } from "./createClientItem.js"

export const addClientModal = () => {
    const createForm = createClientsForm()
    const modal = document.createElement('div')
    const modalContent = document.createElement('div')

    modal.classList.add('modal', 'site-modal', 'modal-active')
    modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active')
    createForm.form.classList.add('add-client')

    modal.append(modalContent)
    modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form)

    createForm.form.addEventListener('submit', async (e) => {
        e.preventDefault()
        if (!validateClientForm()) {
            return
        }

        const contactTypes = document.querySelectorAll('.contact__name')
        const contactValues = document.querySelectorAll('.contact__input')
        const imageDisplay = document.getElementById('imageDisplay')
        const imageDisplayBack = imageDisplay.style.backgroundImage
        let contacts = []
        let clientObj = {}

        for (let i = 0; i < contactTypes.length; i++) {
            if (!validateClientContact(contactTypes[i], contactValues[i])) {
                return
            }
            contacts.push({
                type: contactTypes[i].innerHTML,
                value: contactValues[i].value
            });
        }

        clientObj.name = createForm.inputName.value
        clientObj.surname = createForm.inputSurname.value
        clientObj.lastName = createForm.inputLastName.value
        clientObj.parentName = createForm.inputParentName.value
        clientObj.parentSurname = createForm.inputParentSurname.value
        clientObj.parentLastName = createForm.inputParentLastName.value
        clientObj.dzo = createForm.inputDzo.value
        clientObj.talent = createForm.selectList.value
        clientObj.age = createForm.selectListAge.value
        clientObj.company = createForm.selectListCompany.value
        clientObj.userImg = imageDisplayBack
        clientObj.contacts = contacts
        console.log(clientObj)

        const spinner = document.querySelector('.modal__spinner')

        try {
            spinner.style.display = 'block'
            const data = await sendClientData(clientObj, 'POST')
            setTimeout(() => {
                document.querySelector('.clients__tbody').append(createClientItem(data))
                document.querySelector('.modal').remove()
            }, 500)
        } catch (err) {
            console.log(err)
        } finally {
            setTimeout(() => spinner.style.display = 'block', 500)
        }
    });

    createForm.modalClose.addEventListener('click', () => {
        modal.remove()
    });

    document.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove()
        }
    });

    return modal
}