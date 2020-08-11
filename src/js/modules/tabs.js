const tabs = (headerSelector, contentSelector, tabsSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector);
    const content = document.querySelectorAll(contentSelector);
    const tabs = document.querySelectorAll(tabsSelector);

    const hideTabContent = () => {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        })
    } 
    
    const showtabContent = (i = 0) => {
        content[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showtabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target 
        && (target.classList.contains(tabsSelector.replace(/\./, ''))
        || target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))){
            tabs.forEach((item, i) => {
                if(target == item || target.parentNode == item){
                    hideTabContent();
                    showtabContent(i);      
                }
            })
        }
    })
};

export default tabs;