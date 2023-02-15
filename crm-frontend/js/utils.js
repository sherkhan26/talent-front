import { svgPhone, svgFb, svgVk, svgEmail, svgOther } from "./svg.js"
import { contactTooltip } from "./createTooltip.js"

export const createContactLink = (type, value, element, svg, item) => {
    const setTooltip = contactTooltip(type, value)

    element = document.createElement('a')
    element.classList.add('contacts__link')
    element.innerHTML = svg

    if (type === 'Email') {
        element.href = `mailto:${value.trim()}`
    } else if (type === 'Телефон') {
        element.href = `tel:${value.trim()}`
        setTooltip.tooltipValue.style.color = 'var(--color-white)'
        setTooltip.tooltipValue.style.textDecoration = 'none'
    } else {
        element.href = value.trim()
    }

    element.append(setTooltip.tooltip)
    item.append(element)
}

export const createContactItemByType = (type, value, item) => {
    switch (type) {
        case 'Телефон':
            let phone
            createContactLink(type, value, phone, svgPhone, item)
            break
        case 'Facebook':
            let fb
            createContactLink(type, value, fb, svgFb, item)
            break
        case 'VK':
            let vk
            createContactLink(type, value, vk, svgVk, item)
            break
        case 'Email':
            let email
            createContactLink(type, value, email, svgEmail, item)
            break
        case 'Другое':
            let other
            createContactLink(type, value, other, svgOther, item)
            break
                    
        default:
            break
    }
}

export const formatDate = data => {
    const newDate = new Date(data)

    const correctDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }

    return newDate.toLocaleString('ru', correctDate)
}

export const formatTime = data => {
    const newDate = new Date(data)

    const correctDate = {
        hour: 'numeric',
        minute: 'numeric',
    }

    return newDate.toLocaleString('ru', correctDate)
}