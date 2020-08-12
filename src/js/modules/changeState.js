const changeState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('.checkbox');
    const windowProfile = document.querySelectorAll('#view_type');

    const someFunction = (event, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if(j === i){
                                    box.checked = true
                                }
                            });
                        } else{
                            state[prop] = item.value
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            }) 
        });
    }

    someFunction('click', windowForm, 'form');
    someFunction('input', windowWidth, 'width');
    someFunction('input', windowHeight, 'height');
    someFunction('change', windowType, 'type');
    someFunction('change', windowProfile, 'profile');
};

export default changeState;