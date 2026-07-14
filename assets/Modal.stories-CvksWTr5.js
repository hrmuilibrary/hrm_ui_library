import{j as e}from"./jsx-runtime-CVR_gjst.js";import{r as c}from"./iframe-Cz47NnCw.js";import{a as k,b as N,c as z,d as $,M as C}from"./Popover-DEU-KrgQ.js";import{c as b}from"./index-D7DBw789.js";import"./types-01LlMfXP.js";import{B as x}from"./Button-CDXXyKIE.js";import{T as f}from"./Text-G_RZLOGM.js";import{r as A}from"./Tooltip-DqBdJGKa.js";import{a as D}from"./IconArrowDownloadFilled-BrfSZ6L0.js";import{S as B}from"./index-Jb8OKkm0.js";import{I as R}from"./IconOpen-CVJ3RQfn.js";import{S as w}from"./Status-dggHfD7y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-g5DFGKXn.js";import"./helpers-d-VT9Uo5.js";import"./Link-Bt42gc7s.js";import"./index-D0T0OhI4.js";import"./NestedMenu-CB_sS3eu.js";import"./CollapseGroup-CaJxWJd_.js";import"./Divider-BtUPobkn.js";import"./AnimatePresenceWrapper-f89gfeJ2.js";import"./IconChevronDown-C2EHZD32.js";import"./IconChevronUp-CXc3EncW.js";import"./IconChevronRight-DDzwcxbT.js";import"./AvatarGroup-BDGIW8_G.js";import"./DropzoneFileUpload-D8eqr0LS.js";import"./Label-CwqV23Sh.js";import"./useFormProps-B82Tn6RQ.js";import"./ErrorMessage-CoLuO0CR.js";import"./IconDynamicComponent-D-Z5j4h5.js";import"./Snackbar-CB--4BC2.js";import"./Alert-BkFnm4rD.js";import"./IconDismissFilled-BzH1zkoP.js";import"./Progress-DkFNTlwi.js";import"./IconAdd-CdS2hnGs.js";import"./Checkbox-DMqZQk6J.js";import"./IconInfo-CCwgFO02.js";import"./IconCheckmark-C4rmsJZ1.js";import"./Empty-CiW0V44i.js";import"./Image-BlDdvz-1.js";import"./Input-C-NdvSYC.js";import"./IconCheckmarkCircleFilled-f6W03e8z.js";import"./IconChevronLeft-sGZDMA7f.js";import"./IconCaretDownFilled-Bv8W9ZHr.js";import"./extends-CF3RwP-h.js";import"./Tab-CWzo0Og5.js";import"./Badge-D-S-zXZ6.js";import"./IconMore-BXObzpK-.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return N(v,n,O&&t,c.useId()),z(t),$(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},we={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(C,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
