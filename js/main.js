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

let headerBars = document.querySelector('.header__bars'),
    mobileMenu = document.querySelector('.mobile_menu'),
    mobileMenuClose = document.querySelector('.mobile_menu__close');

if (headerBars) {
    headerBars.onclick = () => {
        mobileMenu.classList.add('active');
    }

    mobileMenuClose.onclick = () => {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('end-active');
        setTimeout(() => {
            mobileMenu.classList.remove('end-active');
        }, 300);
    }
}

let accountDropdown = document.querySelector('.header__account_dropdown'),
    accountDropdownBtn = document.querySelector('.header__account_dropdown__btn'),
    accountDropdownList = document.querySelector('.header__account_dropdown__list'),
    accountDropdownClose = document.querySelector('.header__account_dropdown .dropdown_close'),
    accClose = document.querySelectorAll('.accc__cls'),
    accOpen = document.querySelector('.acc__opn');

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

    accClose.forEach(el => {
        el.onclick = () => accountDropdownClose.click();
    })

    if (accOpen) {
        accOpen.onclick = () => {
            mobileMenuClose.click();
            accountDropdownBtn.click();
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

let search = document.querySelectorAll('.search'),
    searchOpen = document.querySelector('.search__open'),
    searchClose = document.querySelectorAll('.search__close');

if (search.length) {
    search.forEach(el => {
        let inp = el.querySelector('.search_inp input');

        inp.onfocus = () => {
            el.classList.add('active');
        }
    })

    searchOpen.onclick = () => {
        search.forEach(el => {
            el.classList.add('active');
        })
    }

    searchClose.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            search.forEach(item => {
                item.classList.remove('active');
                item.classList.add('end-active');
                setTimeout(() => {
                    item.classList.remove('end-active');
                }, 300);
            })
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

let msgItems = document.querySelectorAll('.msg_list .swiper');
let inboxNavSelect = document.querySelector('.inbox__nav_left .checkbox input[type="checkbox"]');
if (msgItems.length) {
    msgItems.forEach(el => {
        let item = el.querySelector('.msg_item'),
            select = el.querySelector('.checkbox input[type="checkbox"]'),
            readEl = el.querySelector('.read_btn'),
            unreadIcon = el.querySelector('.unread_icon'),
            unreadInp = el.querySelector('.unread_icon input[type="checkbox"]'),
            markIcon = el.querySelector('.mark_icon'),
            markInp = el.querySelector('.mark_icon input');

        let swp = new Swiper(el, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            initialSlide: 1,
            allowTouchMove: true,
            breakpoints: {
                992: {
                    allowTouchMove: false,
                }
            }
        })

        window.addEventListener('resize', function () {
            if (this.window.innerWidth > 992) {
                swp.activeIndex = 1;
            }
        })

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

        const checkRead = () => {
            if (unreadInp.checked) {
                item.classList.add('unread');
                readEl.classList.add('active');
            } else {
                item.classList.remove('unread');
                readEl.classList.remove('active');
            }
        }

        checkRead();

        unreadIcon.onclick = () => {
            unreadInp.click();
            checkRead();
        }

        readEl.onclick = () => {
            unreadInp.click();
            checkRead();
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
    deleteModalOpen = document.querySelectorAll('.modal_delete__open');

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

let modalClass = ['contact', 'folder', 'indentities', 'responses', 'filters'];
modalClass.forEach(cls => {
    let add = document.querySelector(`.${cls}_add`),
        addOpen = document.querySelectorAll(`.${cls}_add__open`),
        edit = document.querySelector(`.${cls}_edit`),
        editOpen = document.querySelectorAll(`.${cls}_edit__open`);

    if (addOpen.length) {
        addOpen.forEach(el => {
            el.onclick = e => {
                e.preventDefault();
                add.classList.add('active');
            }
        })
    }
    
    if (editOpen.length) {
        editOpen.forEach(el => {
            el.onclick = e => {
                e.preventDefault();
                edit.classList.add('active');
            }
        })
    }
    
})

let deleteModalOpen2 = document.querySelector('.modal_delete__open_2'),
    deleteModal2 = document.querySelector('.filters_delete');
if (deleteModalOpen2) {
    deleteModalOpen2.onclick = e => {
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
        deleteModal2.classList.add('active')
    }
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

let foldersAccordion = document.querySelectorAll('.folders__accordion');
if (foldersAccordion.length) {
    foldersAccordion.forEach(el => {
        let btn = el.querySelector('.folders__accordion_btn'),
            bdy = el.querySelector('.folders__accordion_body');
        btn.onclick = () => {
            if (bdy) {
                bdy.classList.toggle('active');
                btn.classList.toggle('active');
            }
        }
    })
}

let folderChilAccordion = document.querySelectorAll('.folders__child_accordion');
if (folderChilAccordion.length) {
    folderChilAccordion.forEach(el => {
        let btn = el.querySelector('.folders__child_accordion__btn'),
            bdy = el.querySelector('.folders__child_accordion__body');
        btn.onclick = () => {
            if (bdy) {
                bdy.classList.toggle('active');
                btn.classList.toggle('active')
            }
        }
    })
}

let actionModal = document.querySelector('.action-modal'),
    actionModalOpen = document.querySelector('.action_modal__open'),
    actionModalClose = document.querySelector('.action_modal__close');

if (actionModal) {
    actionModalOpen.onclick = () => {
        actionModal.classList.add('active');
    }

    actionModalClose.onclick = () => {
        actionModal.classList.remove('active');
        actionModal.classList.add('end-active');
        setTimeout(() => {
            actionModal.classList.remove('end-active');
        }, 300);
    }
}

let openChildModal = document.querySelectorAll('.modal_sm__body ul button'),
    childModal = document.querySelectorAll('.modal-child__content');

if (openChildModal.length) {
    openChildModal.forEach((el, elID) => {
        let tag = childModal[elID];
        if (tag) {
            el.onclick = e => {
                e.preventDefault();
                tag.classList.add('active');
            }
            tag.querySelector('.modal-child__close').onclick = () => {
                tag.classList.remove('active');
                tag.classList.add('end-active');
                setTimeout(() => {
                    tag.classList.remove('end-active');
                }, 300);
            }
        }
    })
}

let openNav = document.querySelector('.open-navs'),
    navModal = document.querySelector('.nav-modal'),
    navModalClose = document.querySelector('.nav-modal .action_modal__close');

if (openNav) {
    openNav.onclick = () => {
        navModal.classList.add('active')
    }

    navModalClose.onclick = () => {
        navModal.classList.remove('active');
        navModal.classList.add('end-active');
        setTimeout(() => {
            navModal.classList.remove('end-active');
        }, 300);
    }
}

if (document.querySelector('#text-editor')) {
    let Size = Quill.import('attributors/style/size');
    Size.whitelist = ['10pt', '12pt', '14pt', '18pt', '24pt', '32pt', '48pt'];
    Quill.register(Size, true);

    let Font = Quill.import('attributors/style/font');
    Font.whitelist = ['sans-serif', 'serif', 'monospace', 'times-new-roman', 'arial', 'courier-new'];
    Quill.register(Font, true);

    let quill = new Quill('#text-editor', {
        modules: {
            toolbar: '#toolbar-container'
        },
        theme: 'snow',
        placeholder: 'Type your message here',
    });

    // Custom handler for unlink button
    document.querySelector('.ql-unlink').addEventListener('click', function() {
        let range = quill.getSelection();
        if (range) {
            quill.format('link', false);
        }
    });

    // Custom handler for table button
    document.querySelector('.ql-table').addEventListener('click', function() {
        let range = quill.getSelection();
        if (range) {
            let table = `
                <table border="1">
                    <tr><td>Row 1 Col 1</td><td>Row 1 Col 2</td></tr>
                    <tr><td>Row 2 Col 1</td><td>Row 2 Col 2</td></tr>
                </table>`;
            quill.clipboard.dangerouslyPasteHTML(range.index, table);
        }
    });

    // Custom handler for symbol button
    document.querySelector('.ql-symbol').addEventListener('click', function() {
        let range = quill.getSelection();
        if (range) {
            quill.insertText(range.index, 'Ω');
        }
    });

    // Custom handler for undo button
    document.querySelector('.ql-undo').addEventListener('click', function() {
        quill.history.undo();
    });

    // Custom handler for redo button
    document.querySelector('.ql-redo').addEventListener('click', function() {
        quill.history.redo();
    });
}

let sendToInp = document.querySelector('.send_to input'),
    sendToList = document.querySelector('.send_to ul');

if (sendToInp) {
    let addUser = () => {
        let text = sendToInp.value;

        if (text != '') {
            let el = document.createElement('li');
            el.innerHTML = `<p>${text}</p>
            <span class="line"></span>
            <button>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06483 0.933534C9.37725 1.24595 9.37725 1.75249 9.06483 2.0649L6.13055 4.99918L9.06483 7.93346C9.37725 8.24588 9.37725 8.75241 9.06483 9.06483C8.75241 9.37725 8.24588 9.37725 7.93346 9.06483L4.99918 6.13056L2.0649 9.06483C1.75248 9.37725 1.24595 9.37725 0.933533 9.06483C0.621114 8.75241 0.621114 8.24588 0.933533 7.93346L3.86781 4.99918L0.933533 2.0649C0.621114 1.75248 0.621114 1.24595 0.933533 0.933533C1.24595 0.621114 1.75248 0.621114 2.0649 0.933533L4.99918 3.86781L7.93346 0.933534C8.24588 0.621114 8.75241 0.621114 9.06483 0.933534Z" fill="black"/>
                </svg>
            </button>`;
            sendToList.appendChild(el);
        }

        sendToInp.value = "";

        let sendToListItem = document.querySelectorAll('.send_to ul li');
        if (sendToListItem.length) {
            sendToListItem.forEach(li => {
                let btn = li.querySelector('button');
                btn.onclick = () => {
                    li.remove();
                }
            })
        }
    }

    sendToInp.onblur = () => {
        addUser();
    }

    sendToInp.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addUser();
        }
    });
}

document.addEventListener('click', (event) => {
    if (accountDropdown && accountDropdownList.classList.contains('active') && window.innerWidth > 992) {
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

    if (search.length && window.innerWidth > 992) {
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