let duckEl =document.querySelector('.home__animation')

if (duckEl) {
    let duck = bodymovin.loadAnimation({
        container: duckEl,
        renderer: 'svg',
        path: '../animation/duck_animation.json',
        loop: true,
        autoplay: true,
    })
    duck.setSpeed(0.5)
}

let radioDropdown = document.querySelectorAll('.dropdown_radio');
if (radioDropdown.length) {
    radioDropdown.forEach(el => {
        let items = el.querySelectorAll('.dropdown_radio__item');
        
        if (items.length) {
            items.forEach(item => {
                let inp = item.querySelector('input');

                const checkRadioChecked = () => {
                    items.forEach(e => {
                        let i = e.querySelector('input')
                        if (i.checked) {
                            e.classList.add('checked');
                        } else {
                            e.classList.remove('checked')
                        }
                    })
                }

                checkRadioChecked();

                item.onclick = () => {
                    inp.click();
                    checkRadioChecked();
                }
            })
        }
    })
}

let accountDropdown = document.querySelector('.header__account_dropdown'),
    accountDropdownBtn = document.querySelector('.header__account_dropdown__btn'),
    accountDropdownList = document.querySelector('.header__account_dropdown__list'),
    accountDropdownClose = document.querySelector('.header__account_dropdown .dropdown_close');

if (accountDropdownBtn) {
    accountDropdownBtn.onclick = () => {
        if (accountDropdownList.classList.contains('active')) {
            accountDropdownList.classList.remove('active');
            accountDropdownList.classList.add('end-active');
            setTimeout(() => {
                accountDropdownList.classList.remove('end-active');
            }, 300);
        } else {
            accountDropdownList.classList.add('active');
        }
    }

    if (accountDropdownClose) {
        accountDropdownClose.onclick = () => {
            accountDropdownList.classList.remove('active');
            accountDropdownList.classList.add('end-active');
            setTimeout(() => {
                accountDropdownList.classList.remove('end-active');
            }, 300);
        }
    }
}

let checkBox1 = document.querySelectorAll('.checkbox-1');
if (checkBox1.length) {
    checkBox1.forEach(checkbox => {
        let btn = checkbox.querySelector('.icon'),
            inp = checkbox.querySelector('input');
        
        btn.onclick = () => {
            inp.click();
        }
    })
}

let dropdown = document.querySelectorAll('.dropdown');
if (dropdown.length) {
    dropdown.forEach(el => {
        let lists = el.querySelector('.dropdown_list'),
            list = el.querySelectorAll('.dropdown_list__item'),
            inp = el.querySelector('.dropdown_inp input'),
            dropdownOpen = el.querySelector('.dropdown_inp');
        
        if (list.length) {
            dropdownOpen.onclick = () => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                    el.classList.add('end-active');
                    setTimeout(() => {
                        el.classList.remove('end-active')
                    }, 300);
                } else {
                    el.classList.add('active');
                }
            }

            list.forEach(btn => {
                if (btn.classList.contains('checked')) {
                    inp.value = btn.textContent;
                }

                btn.onclick = () => {
                    inp.value = btn.textContent;
                    list.forEach(l => {
                        if (l == btn) {
                            l.classList.add('checked');
                        } else {
                            l.classList.remove('checked')
                        }
                    })
                    el.classList.remove('active');
                    el.classList.add('end-active');
                    setTimeout(() => {
                        el.classList.remove('end-active')
                    }, 300);
                }
            })
        }
    })
}

let search = document.querySelectorAll('.search');
if (search.length) {
    search.forEach(el => {
        let inp = el.querySelector('.search_inp input');

        inp.onfocus = () => {
            el.classList.add('active');
        }
    })
}

document.addEventListener('click', (event) => {
    if (accountDropdown && accountDropdownList.classList.contains('active')) {
        const t1 = event.composedPath().includes(accountDropdown)
    
        if (!t1) {
            accountDropdownList.classList.remove('active');
            accountDropdownList.classList.add('end-active');
            setTimeout(() => {
                accountDropdownList.classList.remove('end-active');
            }, 300);
        } 
    }

    if (dropdown.length) {
        dropdown.forEach(el => {
            const t2 = event.composedPath().includes(el);

            if (!t2 && el.classList.contains('active')) {
                el.classList.remove('active');
                el.classList.add('end-active');
                setTimeout(() => {
                    el.classList.remove('end-active')
                }, 300);
            }
        })
    }

    if (search.length) {
        search.forEach(el => {
            const t3 = event.composedPath().includes(el);

            if (!t3 && el.classList.contains('active')) {
                el.classList.remove('active');
                el.classList.add('end-active');
                setTimeout(() => {
                    el.classList.remove('end-active')
                }, 300);
            }
        })
    }
})