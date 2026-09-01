import{j as t}from"./jsx-runtime-4NWiPWPm.js";import{r as c}from"./iframe-BG6WM3e7.js";import{a as k,b as N,c as z,M as C}from"./Popover-CGGsCyV-.js";import{c as b}from"./index-BKlDniVL.js";import"./types-DmrQQh7l.js";import{u as B}from"./useOnOutsideClick-Bfn95q0E.js";import{B as x}from"./Button-DQ1mKJOG.js";import{T as f}from"./Text-CM9T0sJi.js";import{r as $}from"./Tooltip-jcR62bqi.js";import{a as A}from"./IconArrowDownloadFilled-5oVrIbWk.js";import{S as D}from"./index-BHTA5O1n.js";import{I as R}from"./IconOpen-DxNPZtBH.js";import{S as w}from"./Status-DNcViSgD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-0OykOwFT.js";import"./helpers-no7yRckL.js";import"./Link-CAvzy2Au.js";import"./index-X9kxBWE2.js";import"./NestedMenu-lNX23_3M.js";import"./CollapseGroup-rPRi14wf.js";import"./Divider-BGwfJTwU.js";import"./AnimatePresenceWrapper-PqtIVJNl.js";import"./IconChevronDown-Fn-tYr4A.js";import"./IconChevronUp--qucuA-M.js";import"./IconChevronRight-DYazX7ce.js";import"./AvatarGroup-CzuQxNhz.js";import"./DropzoneFileUpload-XJ1Ljc6r.js";import"./Label-CrVXFlsx.js";import"./useFormProps-BF5m7plc.js";import"./ErrorMessage-BGQl9l1U.js";import"./IconDynamicComponent-VEflY6BO.js";import"./Snackbar-D9GeNfa-.js";import"./Alert-QHkjFDnv.js";import"./IconDismissFilled-DE9glwdO.js";import"./Progress-xBNljjus.js";import"./IconAdd-BYnpRF1a.js";import"./Checkbox-B25pHGU-.js";import"./IconInfo-Bb9hx5Qt.js";import"./IconCheckmark-C4Y-jC1I.js";import"./Empty-B50hGweF.js";import"./Image-C0Xy0Dde.js";import"./Input-fPIIKhuM.js";import"./IconCheckmarkCircleFilled-DH1pvvTd.js";import"./IconChevronLeft-BmEN-gN-.js";import"./IconCaretDownFilled-Be2aksES.js";import"./extends-CF3RwP-h.js";import"./Tab-D5f9vRIW.js";import"./Badge-BXssCP08.js";import"./IconMore-BvyES18e.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} additionalButton={{
      buttonText: 'danger',
      type: 'danger'
    }} headerIcon={<IconOpen />} headerStatus={<Status type="danger" text="Rejected" size="small" withBackground />} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(M=(g=i.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var S,T,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Ht=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ht as __namedExportsOrder,Et as default};
