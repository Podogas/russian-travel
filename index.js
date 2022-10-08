const LangLinkRu = document.getElementById('header__lang-link_ru');
const LangLinkEn = document.getElementById('header__lang-link_en');

const leadTitle = document.getElementsByClassName('lead__title')[0];
const leadSubTitle = document.getElementsByClassName('lead__subtitle')[0];



const LeadTitleEnContent = "Russian travel";
const LeadTitleRuContent = "Путешествия по России";
const LeadSubTitleEnContent = "The content of this page is unacceptable for translation and perception in the current situation.";
const LeadSubTitleRuContent = "Настоящая страна не в выпусках новостей, а здесь.";
 function insertEnContent() {
  leadTitle.textContent = LeadTitleEnContent;
  leadSubTitle.textContent = LeadSubTitleEnContent;
 }
  function insertRuContent() {
  leadTitle.textContent = LeadTitleRuContent;
  leadSubTitle.textContent = LeadSubTitleRuContent;
 }

function changeLangToRu() {
  LangLinkEn.classList.remove('header__lang-link_status_active');
  LangLinkRu.classList.add('header__lang-link_status_active');
  insertRuContent();
}
function changeLangToEn() {
  LangLinkRu.classList.remove('header__lang-link_status_active');
  LangLinkEn.classList.add('header__lang-link_status_active');
  insertEnContent();
}
LangLinkRu.onclick = changeLangToRu;
LangLinkEn.onclick = changeLangToEn;

