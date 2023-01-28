
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://odtsjccsqqmtnhpredfy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


//logo not draggable
const logo = document.querySelector('#logo');
const logoFooter = document.querySelector('#logo-footer');
const copyright = document.querySelector("#footerMiddleText2 p")



logoFooter.addEventListener('mousedown', function(event) {
    event.preventDefault();
})
copyright.addEventListener('mousedown', function(event) {
    event.preventDefault();
})


//
const headerBar = document.querySelector('.bar')
const showcase = document.querySelector('#showcase')

const Navs = document.querySelectorAll('.nav-ul li');
for (let i = 0; i < Navs.length; i++) {
    Navs[i].addEventListener('mouseover', function() {
        headerBar.classList.add("Nav-shrink")
    });
    Navs[i].addEventListener('mouseleave', function() {
        headerBar.classList.remove("Nav-shrink")
    });
}
