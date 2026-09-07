import{j as t}from"./jsx-runtime-eLskHub1.js";import{r as c}from"./iframe-CCA8howa.js";import{a as k,b as N,c as z,M as C}from"./Popover-DH-FN3UR.js";import{c as b}from"./index-D-1MbwyK.js";import"./types-B2i5IIBE.js";import{u as B}from"./useOnOutsideClick-CCA1KmND.js";import{B as x}from"./Button-uJWmugQC.js";import{T as f}from"./Text-CQrBgAQK.js";import{r as $}from"./Tooltip-Bvm4nk3g.js";import{a as A}from"./IconArrowDownloadFilled-C2xoatHg.js";import{S as D}from"./index-DNASfZf4.js";import{I as R}from"./IconOpen-BP_CopLG.js";import{S as w}from"./Status-Bj835CKg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-BCU1u5xd.js";import"./helpers-CDZpRNsE.js";import"./Link-DXGYqrz3.js";import"./index-Cw5hxcD_.js";import"./NestedMenu-y91YHedS.js";import"./CollapseGroup-ByXJMcIi.js";import"./Divider-CwqRGsXc.js";import"./AnimatePresenceWrapper-9ao3f5H7.js";import"./IconChevronDown-DwlHnBhw.js";import"./IconChevronUp-oWxA-1mn.js";import"./IconChevronRight-DTHUfQ0K.js";import"./AvatarGroup-Bz05vLnT.js";import"./DropzoneFileUpload-D84eqGQs.js";import"./Label-kHjGuaR6.js";import"./useFormProps-CJJUw6mk.js";import"./ErrorMessage-QCDO-32m.js";import"./IconDynamicComponent-CWHwBLok.js";import"./Snackbar-UGuqQTG4.js";import"./Alert-HhHdPQcf.js";import"./IconDismissFilled-DltkXsfY.js";import"./Progress-EO6nTUbw.js";import"./IconAdd-DeHLSeAq.js";import"./Checkbox-Bkh1aJBP.js";import"./IconInfo-DBKauIV4.js";import"./IconCheckmark-BX4Qf0h5.js";import"./Empty-CWQg68xz.js";import"./Image-Bvb6h7UR.js";import"./Input-BIMDtQrL.js";import"./IconCheckmarkCircleFilled-XSXCM_0j.js";import"./IconChevronLeft-Ci3IAD_m.js";import"./IconCaretDownFilled-DU34jEC_.js";import"./extends-CF3RwP-h.js";import"./Tab-BBD5QtGn.js";import"./Badge-CwF6JJlm.js";import"./IconMore-BGY6vcE0.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
