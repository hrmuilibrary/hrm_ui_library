import{j as e}from"./jsx-runtime-3Q_sdxiq.js";import{r as c}from"./iframe-DK9NnRRJ.js";import{a as k,b as N,c as z,d as $,M as C}from"./Popover-CT-0ONbV.js";import{c as b}from"./index-DqlRVWq3.js";import"./types-jammdryo.js";import{B as x}from"./Button-BXo3ltW6.js";import{T as f}from"./Text-DjouLYo4.js";import{r as A}from"./Tooltip-CMcqhJF2.js";import{a as D}from"./IconArrowDownloadFilled-BJxKUVGt.js";import{S as B}from"./index-Di6KHleq.js";import{I as R}from"./IconOpen-Coz1dIsv.js";import{S as w}from"./Status-DtHmNphj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-BklvGjUb.js";import"./helpers-BplHdA7F.js";import"./Link-DzNKWFyo.js";import"./index-DVN3lhXT.js";import"./NestedMenu-CKGBpxqc.js";import"./CollapseGroup-DYfPLSMp.js";import"./Divider-BTgFSVXp.js";import"./AnimatePresenceWrapper-C4g7vmcb.js";import"./IconChevronDown-BAD1q4sH.js";import"./IconChevronUp-jmqN9HD8.js";import"./IconChevronRight-53PkZs3C.js";import"./AvatarGroup-C1p0ChIy.js";import"./DropzoneFileUpload-BrMmRdLi.js";import"./Label-C2F5sOOh.js";import"./useFormProps-q1o0_ocl.js";import"./ErrorMessage-Dz6f40Qt.js";import"./IconDynamicComponent-D0cx9qUZ.js";import"./Snackbar-vz10q9tn.js";import"./Alert-CF-jva8b.js";import"./IconDismissFilled-BJWxudke.js";import"./Progress--Jv0hBV-.js";import"./IconAdd-BWhYPbsr.js";import"./Checkbox-DNQyCuYA.js";import"./IconInfo-Cn6BXtj3.js";import"./IconCheckmark-TDrL7Xs4.js";import"./Empty-bodSgTee.js";import"./Image-BBHKB0Eq.js";import"./Input-S-UyCs3X.js";import"./IconCheckmarkCircleFilled-DsUqxkKK.js";import"./IconChevronLeft-CDPj4Qel.js";import"./IconCaretDownFilled-ueQLvTFI.js";import"./extends-CF3RwP-h.js";import"./Tab-DxDcn57K.js";import"./Badge-DDH4_nGJ.js";import"./IconMore-DSmmQb2I.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return N(v,n,O&&t,c.useId()),z(t),$(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},we={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(C,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
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
}`,...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var g,T,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Ee=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ee as __namedExportsOrder,we as default};
