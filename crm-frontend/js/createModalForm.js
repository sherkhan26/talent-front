import { createContactItem } from "./createContact.js"
import {svgContactDefault, svgContactHover, svgSpinner} from "./svg.js"

export const createClientsForm = () => {
    const modalTitle = document.createElement('h2')
    const modalClose = document.createElement('button')
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    const labelName = document.createElement('label')
    const inputSurname = document.createElement('input')
    const labelSurname = document.createElement('label')
    const inputLastName = document.createElement('input')
    const labelLastName = document.createElement('label')
    const inputParentName = document.createElement('input')
    const inputParentSurname = document.createElement('input')
    const inputParentLastName = document.createElement('input')
    const inputVideo = document.createElement('input')
    const labelVideo = document.createElement('label')
    const inputDzo = document.createElement('input')
    const labelDzo = document.createElement('label')
    const selectList = document.createElement("select")
    const selectListAge = document.createElement("select")
    const selectListCompany = document.createElement("select")
    const imageDisplay = document.createElement("div")
    const imageInput = document.createElement("input")
    const optionOne = document.createElement("option")
    const optionTwo = document.createElement("option")
    const optionThree = document.createElement("option")
    const optionFour = document.createElement("option")
    const optionOneAge = document.createElement("option")
    const optionOneCompany = document.createElement("option")
    const requiredName = document.createElement('span')
    const requiredSurname = document.createElement('span')
    const addContactBtn = document.createElement('button')
    const contactBtnSvgDefault = document.createElement('span')
    const contactBtnSvgHover = document.createElement('span')
    const saveBtn = document.createElement('button')
    const cancelBtn = document.createElement('button')
    const contactsBlock = document.createElement('div')
    const formFloatingName = document.createElement('div')
    const formFloatingSurname = document.createElement('div')
    const formFloatingLastName = document.createElement('div')
    const formFloatingVideo = document.createElement('div')
    const formFloatingDzo = document.createElement('div')
    const saveSpinner = document.createElement('span')

    const errorBlock = document.createElement('p')
    const unacceptableLetter = document.createElement('span')
    const writeName = document.createElement('span')
    const writeSurname = document.createElement('span')
    const writeLastName = document.createElement('span')
    const requiredValue = document.createElement('span')
    const requiredContacts = document.createElement('span')

    saveSpinner.classList.add('modal__spinner')
    modalTitle.classList.add('modal__title')
    modalClose.classList.add('modal__close', 'btn-reset')
    form.classList.add('modal__form')
    formFloatingName.classList.add('form-floating')
    formFloatingSurname.classList.add('form-floating')
    formFloatingLastName.classList.add('form-floating')
    formFloatingVideo.classList.add('form-floating')
    formFloatingDzo.classList.add('form-floating')
    inputName.classList.add('modal__input')
    inputSurname.classList.add('modal__input')
    inputLastName.classList.add('modal__input')
    inputParentName.classList.add('modal__input')
    inputParentSurname.classList.add('modal__input')
    inputParentLastName.classList.add('modal__input')
    inputVideo.classList.add('modal__input')
    inputDzo.classList.add('modal__input')
    labelName.classList.add('modal__label')
    labelSurname.classList.add('modal__label')
    labelLastName.classList.add('modal__label')
    labelVideo.classList.add('modal__label')
    labelDzo.classList.add('modal__label')
    requiredName.classList.add('modal__label')
    requiredSurname.classList.add('modal__label')
    addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active')
    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn')
    cancelBtn.classList.add('modal__btn-back', 'btn-reset')
    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active')
    contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover')
    contactsBlock.classList.add('modal__contact')
    labelName.for = 'floatingName'
    labelSurname.for = 'floatingSurname'
    labelLastName.for = 'floatingLastName'
    labelVideo.for = 'floatingVideo'
    inputName.id = 'floatingName'
    inputSurname.id = 'floatingSurname'
    inputLastName.id = 'floatingLastName'
    inputVideo.id = 'floatingLastName'
    inputDzo.id = 'floatingDzo'
    selectList.id = "mySelect"
    selectListAge.id = "mySelectAge"
    selectListCompany.id = "mySelectCompany"
    inputName.type = 'text'
    inputSurname.type = 'text'
    inputLastName.type = 'text'
    inputVideo.type = 'text'
    inputDzo.type = 'text'
    inputParentName.type = 'text'
    inputParentSurname.type = 'text'
    inputParentLastName.type = 'text'
    inputName.placeholder = '??????'
    inputSurname.placeholder = '??????????????'
    inputLastName.placeholder = '????????????????'
    inputParentName.placeholder = '?????? ????????????????'
    inputParentSurname.placeholder = '?????????????? ????????????????'
    inputParentLastName.placeholder = '???????????????? ????????????????'
    inputVideo.placeholder = 'Video'
    inputDzo.placeholder = '??????'

    errorBlock.classList.add('modal__error')
    unacceptableLetter.id = 'unacceptableLetter'
    writeName.id = 'writeName'
    writeSurname.id = 'writeSurname'
    writeLastName.id = 'writeLastName'
    requiredValue.id = 'requiredValue'
    requiredContacts.id = 'requiredContacts'
    imageDisplay.id = 'imageDisplay'
    imageInput.id = 'imageInput'

    imageInput.type = 'file'
    imageInput.accept = 'image/png, image/jpg'

    saveSpinner.innerHTML = svgSpinner
    modalTitle.textContent = '?????????? ????????????????'
    labelName.textContent = '??????'
    labelSurname.textContent = '??????????????'
    labelLastName.textContent = '????????????????'
    addContactBtn.textContent = '???????????????? ??????????????'
    saveBtn.textContent = '??????????????????'
    cancelBtn.textContent = '????????????'
    requiredName.textContent = '*'
    requiredSurname.textContent = '*'
    contactBtnSvgDefault.innerHTML = svgContactDefault
    contactBtnSvgHover.innerHTML = svgContactHover
    optionOne.value = '???????? ??????????????:';
    optionOne.text = '???????? ??????????????:';
    optionTwo.value = '??????????';
    optionTwo.text = '??????????';
    optionThree.value = '??????????';
    optionThree.text = '??????????';
    optionFour.value = '????????????';
    optionFour.text = '????????????';
    optionOneAge.value = '??????????????';
    optionOneAge.text = '??????????????';
    optionOneCompany.value = '????????????????';
    optionOneCompany.text = '????????????????';
    labelName.append(requiredName)
    saveBtn.append(saveSpinner)
    labelSurname.append(requiredSurname)
    formFloatingName.append(inputName, labelName)
    formFloatingSurname.append(inputSurname, labelSurname)
    formFloatingLastName.append(inputLastName, labelLastName)
    formFloatingVideo.append(inputVideo, labelVideo)
    formFloatingDzo.append(inputDzo, labelDzo)
    contactsBlock.append(addContactBtn)
    errorBlock.append(writeName, writeSurname, writeLastName, requiredValue, unacceptableLetter, requiredContacts)
    selectList.append(
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
    )
    selectListAge.append(
        optionOneAge
    )
    selectListCompany.append(
        optionOneCompany
    )
    form.append(
        formFloatingName,
        formFloatingSurname,
        formFloatingLastName,
        formFloatingVideo,
        formFloatingDzo,
        imageDisplay,
        imageInput,
        selectList,
        selectListAge,
        selectListCompany,
        contactsBlock,
        errorBlock,
        saveBtn,
        cancelBtn
    )
    let uploaded_image = ""
    imageInput.addEventListener("change", function()  {
        let reader = new FileReader()
        reader.addEventListener("load", () => {
            uploaded_image = reader.result;
            imageDisplay.style.backgroundImage = `url(${uploaded_image}`
        })
        reader.readAsDataURL(this.files[0])
    })

    addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover)

    addContactBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const contactsItems = document.getElementsByClassName('contact')

        if (contactsItems.length < 9) {
            const contactItem = createContactItem()
            contactsBlock.prepend(contactItem.contact)
            contactsBlock.style.backgroundColor = 'var(--color-athens-gray)'
            if (contactsItems.length >= 5) {
                document.querySelector('.site-modal__content').style.top = '70%'
            } else {
                document.querySelector('.site-modal__content').style.top = '50%'
            }
        } else {
            const contactItem = createContactItem()
            contactsBlock.prepend(contactItem.contact)
            addContactBtn.classList.remove('modal__btn-contact--active')
        }
    });

    addContactBtn.addEventListener('mousemove', () => {
        contactBtnSvgDefault.classList.remove('btn-contact__svg--active')
        contactBtnSvgHover.classList.add('btn-contact__svg--active')
    });

    addContactBtn.addEventListener('mouseleave', () => {
        contactBtnSvgDefault.classList.add('btn-contact__svg--active')
        contactBtnSvgHover.classList.remove('btn-contact__svg--active')
    });

    return {
        form,
        modalClose,
        modalTitle,
        cancelBtn,
        inputName,
        inputSurname,
        inputLastName,
        inputParentName,
        inputParentSurname,
        inputParentLastName,
        inputVideo,
        inputDzo,
        selectList,
        selectListAge,
        selectListCompany,
        labelName,
        labelSurname,
        labelLastName,
        labelVideo,
        labelDzo,
        contactsBlock,
        addContactBtn
    };
}

