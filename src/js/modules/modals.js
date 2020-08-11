const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const allModals = document.querySelectorAll('[data-modal]');
        const scrollWidth = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                } 
                allModals.forEach(item => {
                    item.style.display = 'none';
                })
                modal.style.display = 'block';
                document.body.style.marginRight = `${scrollWidth}px`;
                document.body.style.overflow = 'hidden';
            })
        })

        close.addEventListener('click', () => { 
            allModals.forEach(item => {
                item.style.display = 'none';
            })
            modal.style.display = 'none';
            document.body.style.marginRight = `0px`;
            document.body.style.overflow = ''; 
        })

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay){
                allModals.forEach(item => {
                    item.style.display = 'none';
                })
                document.body.style.marginRight = `0px`;
                modal.style.display = 'none';
                document.body.style.overflow = '';
               
            }
        })
    }

    const openModalByTime = (selector, time) => {
        setTimeout(() => {
            document.body.querySelector(selector).style.display = 'block'
            document.body.style.overflow = '';
        }, time)
    }


    const calcScroll = () => {
        let div = document.createElement('div');

        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'

        document.body.appendChild(div)

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // openModalByTime('.popup', 60000)
}

export default modals;