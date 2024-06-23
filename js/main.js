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

let checkBox = document.querySelectorAll('.checkbox');
if (checkBox.length) {
    checkBox.forEach(el => {
        let inp = el.querySelector('input[type="checkbox"]');

        if (inp.checked) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }

        el.onclick = () => {
            inp.click();

            if (inp.checked) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        };
    })
}

let msgItems = document.querySelectorAll('.msg_list .msg_item');
let inboxNavSelect = document.querySelector('.inbox__nav_left .checkbox input[type="checkbox"]');
if (msgItems.length) {
    msgItems.forEach(item => {
        let select = item.querySelector('.checkbox input[type="checkbox"]'),
            unreadIcon = item.querySelector('.unread_icon'),
            unreadInp = item.querySelector('.unread_icon input[type="checkbox"]'),
            markIcon = item.querySelector('.mark_icon'),
            markInp = item.querySelector('.mark_icon input');

        if (select.checked) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected')
        }
        
        select.onchange = () => {
            if (select.checked) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected')
            }
        }

        if (unreadInp.checked) {
            item.classList.add('unread');
        } else {
            item.classList.remove('unread');
        }

        unreadIcon.onclick = () => {
            unreadInp.click();
            if (unreadInp.checked) {
                item.classList.add('unread');
            } else {
                item.classList.remove('unread');
            }
        }

        markIcon.onclick = () => markInp.click();
    })

    const selectedAll = () => {
        msgItems.forEach(item => {
            let select = item.querySelector('.checkbox input[type="checkbox"]');

            if (!select.checked) select.click();
        })
    }

    const unSelectedAll = () => {
        msgItems.forEach(item => {
            let select = item.querySelector('.checkbox input[type="checkbox"]');

            if (select.checked) select.click();
        })
    }

    if (inboxNavSelect) {
        if (inboxNavSelect.checked) {
            selectedAll();
        }

        inboxNavSelect.onchange = () => {
            if (inboxNavSelect.checked) {
                selectedAll();
            } else {
                unSelectedAll();
            }
        }
    }
}

let modal = document.querySelectorAll('.modal'),
    modalClose = document.querySelectorAll('.modal__close'),
    deleteModal = document.querySelector('.modal_delete'),
    deleteModalOpen = document.querySelectorAll('.modal_delete__open'),
    contactAdd = document.querySelector('.contact_add'),
    contactAddOpen = document.querySelectorAll('.contact_add__open'),
    contactEdit = document.querySelector('.contact_edit'),
    contactEditOpen = document.querySelectorAll('.contact_edit__open');

if (modalClose.length) {
    modalClose.forEach(el => {
        el.onclick = () => {
            modal.forEach(m => {
                if (m.classList.contains('active')) {
                    m.classList.remove('active');
                    m.classList.add('end-active');
                    setTimeout(() => {
                        m.classList.remove('end-active');
                    }, 300);
                }
            })
        }
    })
}

if (deleteModalOpen.length) {
    deleteModalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            modal.forEach(m => {
                if (m.classList.contains('active')) {
                    m.classList.remove('active');
                    m.classList.add('end-active');
                    setTimeout(() => {
                        m.classList.remove('end-active');
                    }, 300);
                }
            })
            deleteModal.classList.add('active');
        }
    })
}

if (contactAddOpen.length) {
    contactAddOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            contactAdd.classList.add('active');
        }
    })
}

if (contactEditOpen.length) {
    contactEditOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            contactEdit.classList.add('active');
        }
    })
}

let formInp = document.querySelectorAll('.form_inp');

if (formInp.length) {
    formInp.forEach(el => {
        let inp = el.querySelector('input');

        inp.onblur = () => {
            if (inp.value == "") {
                el.classList.add('error');
            } else {
                el.classList.remove('error')
            }
        }

        inp.onfocus = () => {
            if (inp.value != "") {
                el.classList.remove('error');
            }
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